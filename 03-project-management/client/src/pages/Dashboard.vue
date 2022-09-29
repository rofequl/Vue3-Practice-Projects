<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">User Profile</h3>
      </div>
    </div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="row">
      <div class="col-lg-3">
        <ul class="list-unstyled profileList">
          <li class="font-weight-bold">User Profile</li>
          <li>Social Profiles</li>
          <li>Password Change</li>
        </ul>
      </div>
      <div class="col-lg-9">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0 float-left">User Profile</h6>
            <span class="float-right text-primary small">Cancel</span>
          </div>
          <div class="form-row m-4">
            <div class="col-lg-4">
              <label for="userProfilePicture" class="text-center w-100 mb-4">Profile Picture</label>
              <div class="edit-user-details__avatar m-auto">
                <img src="../assets/img/avatar.png" alt="User Avatar">
                <label class="edit-user-details__avatar__change">
                  <i class="material-icons mr-1"></i>
                  <input type="file" id="userProfilePicture" class="d-none">
                </label>
              </div>
              <button class="btn btn-sm btn-white d-table mx-auto mt-4"><i class="material-icons"></i> Upload Image</button>
            </div>
            <div class="col-lg-8">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="firstName">First Name</label>
                  <input type="text" class="form-control" id="firstName" value="Sierra">
                </div>
                <div class="form-group col-md-6">
                  <label for="lastName">Last Name</label>
                  <input type="text" class="form-control" id="lastName" value="Brooks">
                </div>
                <div class="form-group col-md-6">
                  <label for="userLocation">Location</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="material-icons"></i>
                      </div>
                    </div>
                    <input type="text" class="form-control" value="Remote">
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="phoneNumber">Phone Number</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="material-icons"></i>
                      </div>
                    </div>
                    <input type="text" class="form-control" id="phoneNumber" value="+40 1234 567 890">
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="emailAddress">Email</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="material-icons"></i>
                      </div>
                    </div>
                    <input type="email" class="form-control" id="emailAddress">
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="displayEmail">Display Email Publicly</label>
                  <select class="custom-select">
                    <option value="1" selected="">Yes, display my email</option>
                    <option value="2">No, do not display my email.</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Default Light Table -->
  </div>
</template>


