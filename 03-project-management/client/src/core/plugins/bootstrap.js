import {defineRule, configure} from "vee-validate";
import {required, email, min, alpha_spaces, max, confirmed} from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("alpha_spaces", alpha_spaces);
defineRule("max", max);
defineRule("confirmed", confirmed);
configure({
    generateMessage: (context) => {
        const messages = {
            required: `This ${context.field} field is required`,
            email: `This ${context.field} is not a valid email`,
            min: `The ${context.field} field must be at least ${context.rule.params[0]} characters`,
            alpha_spaces: `The ${context.field} field may only contain alphabetic characters as well as spaces`,
            max: `This ${context.field} field is too high, maximum ${context.rule.params[0]} characters`,
            confirmed: `This field ${context.field} does not match`,
        };
        const message = messages[context.rule.name]
            ? messages[context.rule.name]
            : `The field ${context.field} is invalid`;
        return message;
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});