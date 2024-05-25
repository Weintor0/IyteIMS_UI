import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import FirmHomePage from "./pages/firm/home-page/FirmHomePage";
import FirmNotifications from "./pages/firm/notifications/FirmNotifications";
import FirmAnnouncements from "./pages/firm/internship-offers/FirmAnnouncements";
import AddAnnouncements from "./pages/firm/internship-offers/AddAnnouncements";
import EvaluateLetter from "./pages/firm/evaluate-letter/EvaluateLetter";
import FillAppForm from "./pages/firm/fill-application-form/FillAppForm";
import CheckStudentReport from "./pages/firm/check-student-report/CheckStudentReport";
import UploadFirmReport from "./pages/firm/upload-firm-report/UploadFirmReport";

import StudentSummerPracticeReports from "./pages/student/summer-practice-reports/StudentSummerPracticeReports";
import StudentSSITransactions from "./pages/student/ssi-transactions/StudentSSITransactions";
import StudentHomePage from "./pages/student/home/StudentHome";
import StudentViewNotifications from "./pages/student/view-notifications/StudentViewNotifications";
import StudentInternshipOffers from "./pages/student/send-application-letter/StudentInternshipOffers";
import StudentSendApplicationLetter from "./pages/student/send-application-letter/StudentSendApplicationLetter";
import StudentViewInternshipApplications from "./pages/student/view-internship-applications/StudentViewInternshipApplications";
import StudentSendApplicationForm from "./pages/student/send-application-form/StudentSendApplicationForm";

import CoordinatorHomePage from "./pages/coordinator/home/CoordinatorHomePage";
import CoordinatorNotificationPage from "./pages/coordinator/view-notifications/CoordinatorNotificationPage";
import CoordinatorInternshipOfferPage from "./pages/coordinator/internship-offers/CoordinatorInternshipOfferPage";
import CoordinatorAnnouncementPage from "./pages/coordinator//coordinator-announcements/CoordinatorAnnouncementPage";
import AddAnnouncementBox from "./pages/coordinator/coordinator-announcements/AddAnnouncementBox";
import CoordinatorSurveyResultsPage from "./pages/coordinator/survey-results/CoordinatorSurveyResultsPage";
import CoordinatorReviewFormsPage from "./pages/coordinator/application-forms/CoordinatorReviewFormsPage";
import CoordinatorSSITransactionsPage from "./pages/coordinator/ssi-transactions/CoordinatorSSITransactionsPage";

import SecretaryHomePage from "./pages/secretary/SecretaryHomePage";
import SecretarySSITransactionsPage from "./pages/secretary/SecretarySSITransactionsPage";
import SecretaryNotificationsPage from "./pages/secretary/SecretaryNotificationsPage";

function App() {
  return (
    <Router>
      <div className="App-container">
        <div className="Page-container">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="/firm/" element={<FirmHomePage />}></Route>
            <Route path="/firm/home" element={<FirmHomePage />}></Route>
            <Route path="/firm/notifications" element={<FirmNotifications />}></Route>
            <Route path="/firm/internship-offers" element={<FirmAnnouncements />}></Route>
            <Route path="/firm/publish-internship-offers" element={<AddAnnouncements />}></Route>
            <Route path="/firm/evaluate-letter" element={<EvaluateLetter />}></Route>
            <Route path="/firm/send-application-form" element={<FillAppForm />}></Route>
            <Route path="/firm/check-student-report" element={<CheckStudentReport />}></Route>
            <Route path="/firm/send-company-form" element={<UploadFirmReport />}></Route>
            {/*
              <Route path="/firm/coordinator-announcements" element={<FirmCoordinatorAnnouncements />}></Route>
            */}

            <Route path="/student/" element={<StudentHomePage />}></Route>
            <Route path="/student/home" element={<StudentHomePage />}></Route>
            <Route path="/student/view-notifications" element={<StudentViewNotifications />}></Route>
            <Route path="/student/internship-offers" element={<StudentInternshipOffers />}></Route>
            <Route path="/student/send-application-letter" element={<StudentSendApplicationLetter />}></Route>
            <Route path="/student/internship-applications" element={<StudentViewInternshipApplications />}></Route>
            <Route path="/student/send-application-form" element={<StudentSendApplicationForm />}></Route>
            <Route path="/student/ssi-transactions" element={<StudentSSITransactions />}></Route>
            <Route path="/student/summer-practice-reports" element={<StudentSummerPracticeReports />}></Route>
            {/*
              <Route path="/student/survey" element={<StudentSurvey />}></Route>
              <Route path="/student/coordinator-announcements" element={<StudentCoordinatorAnnouncements />}></Route>
            */}

            <Route path="/coordinator/" element={<CoordinatorHomePage />}></Route>
            <Route path="/coordinator/home" element={<CoordinatorHomePage />}></Route>
            <Route path="/coordinator/view-notifications" element={<CoordinatorNotificationPage/>}></Route>
            <Route path="/coordinator/announcements" element={<CoordinatorAnnouncementPage/>}></Route>
            <Route path="/coordinator/publish-announcement" element={<AddAnnouncementBox />}></Route>
            <Route path="/coordinator/surveyresult" element={<CoordinatorSurveyResultsPage/>}></Route>
            <Route path="/coordinator/review-forms" element={<CoordinatorReviewFormsPage/>}></Route>
            <Route path="/coordinator/ssi-transactions" element={<CoordinatorSSITransactionsPage/>}></Route>
            <Route path="/coordinator/internship-offers" element={<CoordinatorInternshipOfferPage/>}></Route>

            <Route path="/secretary/" element={<SecretaryHomePage />}></Route>
            <Route path="/secretary/home" element={<SecretaryHomePage />}></Route>
            <Route path="/secretary/view-notifications" element={<SecretaryNotificationsPage />}></Route>
            <Route path="/secretary/ssi-transactions" element={<SecretarySSITransactionsPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
