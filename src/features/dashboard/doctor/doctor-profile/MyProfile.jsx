import useProfile from "./useProfile";
import ProfileIntro from "./ProfileIntro";
import SideInformation from "./SideInformation";
import AboutMe from "./AboutMe";
import DashboardPageHeader from "../DashboardPageHeader";
function MyProfile() {
  const { data: doctorProfile, isLoading } = useProfile();

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <DashboardPageHeader
              pageList={[{ name: "Doctor", link: "/doctor/dashboard" }]}
              currentPage="My Profile"
            />
          </div>
          {/* Page Header */}
          <div className="row">
            {/* Profile card */}
            <div className="col-sm-12">
              <ProfileIntro
                doctorProfile={doctorProfile}
                isLoading={isLoading}
              />
              <div className="row">
                <SideInformation
                  certification={doctorProfile?.certification}
                  isLoading={isLoading}
                />
                {/* About me */}
                <AboutMe doctorProfile={doctorProfile} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
