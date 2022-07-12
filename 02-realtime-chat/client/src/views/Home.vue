<template>
  <div class="flex flex-row gap-4">
    <div class="basis-1/4 md:basis-1/4">
      <!--  Logo and search option  -->
      <div class="flex">
        <img class="w-20 h-16" src="../assets/img/logo.png" alt="Logo">
        <div>
          <div class="mt-3 relative rounded-md">
            <input type="text" class="block w-full pl-7 pr-12 rounded-md bg-green-50 border-none shadow-sm rounded-md"
                   placeholder="Search"/>
            <div class="absolute inset-y-0 right-1 flex items-center">
              <button class="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-1 pl-2 pr-2 rounded-md">C
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--  End Logo and search option  -->
      <!--  User profile Info -->
      <div class="ml-4 mt-4 rounded-2xl flex flex-col relative gap-4 bg-white overflow-x-clip">
        <div class="relative flex flex-col items-center justify-center">
          <img src="https://preview.cruip.com/mosaic/images/pay-bg.jpg" alt="" class="w-full"/>
          <img src="https://preview.cruip.com/mosaic/images/user-64-13.jpg" class="w-24 rounded-full absolute shadow-md -bottom-12" alt=""/>
        </div>
        <div class="flex flex-col items-center mt-12 gap-1">
          <span class="font-bold">Zendaya MJ</span>
          <span>Senior UI/UX Designer</span>
        </div>
        <div class="flex flex-col items-center content-center gap-3">
          <hr class="w-10/12 border-gray-300"/>
          <div class="flex gap-4 w-10/12 justify-around items-center">
            <div class="flex flex-col gap-2 items-center content-center">
              <span class="font-bold">6,890</span>
              <span class="text-gray-500 text-xs">Followings</span>
            </div>
            <div class="h-full border-l border-gray-300"></div>
            <div class="flex flex-col gap-2 items-center content-center">
              <span class="font-bold">1</span>
              <span class="text-gray-500 text-xs">Followers</span>
            </div>
          </div>
          <hr class="w-10/12 border-gray-300"/>
        </div>
        <span class="font-bold text-orange-400 mb-4 cursor-pointer self-center">My Profile</span>
      </div>
      <!--  End User profile Info -->
    </div>
    <div class="basis-3/4 md:basis-1/2"></div>
    <div class="hidden md:basis-1/4 md:block"></div>
  </div>
</template>