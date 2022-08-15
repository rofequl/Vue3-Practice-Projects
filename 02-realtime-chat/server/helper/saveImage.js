const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const sharp = require('sharp');

class Resize {
    constructor(folder, height = null, width = null, extension = '.png') {
        this.folder = path.join(__dirname, `../storage/${folder}`);
        this.height = height;
        this.width = width;
        this.extension = extension;
    }

    save(buffer) {
        const filename = Resize.filename(this.extension);
        const filepath = this.filepath(filename);
        const that = this;
        fs.access(this.folder, function (error) {
            if (error) fs.mkdir(that.folder, {recursive: true}, (err) => {
                if (err) throw err;
                else that.fileSave(buffer, filepath).then(r => r)
            });
            else that.fileSave(buffer, filepath).then(r => r)
        })
        return filename;
    }

    static filename(e) {
        return crypto.randomUUID() + e;
    }

    filepath(filename) {
        return path.resolve(`${this.folder}/${filename}`)
    }

    async fileSave(buffer, filepath) {
        if (this.height !== null && this.width !== null) await sharp(buffer).resize(this.height, this.width, {
            fit: sharp.fit.inside,
            withoutEnlargement: true
        }).toFile(filepath);
        else await sharp(buffer).toFile(filepath);
    }
}

module.exports = Resize;