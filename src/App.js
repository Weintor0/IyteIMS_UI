import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

import FirmHomePage from "./pages/firm/home-page/FirmHomePage";
import FirmNotifications from "./pages/firm/notifications/FirmNotifications";
import FirmAnnouncements from "./pages/firm/internship-offers/FirmAnnouncements";
import AddAnnouncements from "./pages/firm/internship-offers/AddAnnouncements";
import EvaluateLetter from "./pages/firm/evaluate-letter/EvaluateLetter";

import SummerPracticeReports from "./pages/student/summer-practice-reports/SummerPracticeReports";
import SSITransactions from "./pages/student/ssi-transactions/SSITransactions";
import StudentHomePage from "./pages/student/home/StudentHome";
import StudentViewNotifications from "./pages/student/view-notifications/StudentViewNotifications";
import StudentSendApplicationLetter from "./pages/student/send-application-letter/StudentSendApplicationLetter";
import StudentSendApplicationLetter2 from "./pages/student/send-application-letter/StudentSendApplicationLetter2";
import StudentViewInternshipApplications from "./pages/student/view-internship-applications/StudentViewInternshipApplications";
import StudentSendApplicationForm from "./pages/student/send-application-form/StudentSendApplicationForm";

import CoordinatorHomePage from "./pages/coordinator/CoordinatorHomePage";
import CoordinatorInternshipOfferPage from "./pages/coordinator/CoordinatorInternshipOfferPage";
import CoordinatorAnnouncementPage from "./pages/coordinator/CoordinatorAnnouncementPage";
import CoordinatorSurveyResultsPage from "./pages/coordinator/CoordinatorSurveyResultsPage";
import CoordinatorReviewFormsPage from "./pages/coordinator/CoordinatorReviewFormsPage";
import CoordinatorSSITransactionsPage from "./pages/coordinator/CoordinatorSSITransactionsPage";
import CoordinatorProfile from "./pages/coordinator/CoordinatorProfile";

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

            <Route path="/student/" element={<StudentHomePage />}></Route>
            <Route path="/student/home" element={<StudentHomePage />}></Route>
            <Route path="/student/ssi-transactions" element={<SSITransactions />}></Route>
            <Route path="/student/view-notifications" element={<StudentViewNotifications />}></Route>
            <Route path="/student/send-application-letter" element={<StudentSendApplicationLetter />}></Route>
            <Route path="/student/send-application-letter2" element={<StudentSendApplicationLetter2 />}></Route>
            <Route path="/student/internship-applications" element={<StudentViewInternshipApplications />}></Route>
            <Route path="/student/send-application-form" element={<StudentSendApplicationForm />}></Route>
            <Route path="/student/summer-practice-reports" element={<SummerPracticeReports />}></Route>

            <Route path="/coordinator/" element={<CoordinatorHomePage />}></Route>
            <Route path="/coordinator/home" element={<CoordinatorHomePage />}></Route>
            <Route path="/coordinator/announcements" element={<CoordinatorAnnouncementPage/>}></Route>
            <Route path="/coordinator/surveyresult" element={<CoordinatorSurveyResultsPage/>}></Route>
            <Route path="/coordinator/reviewforms" element={<CoordinatorReviewFormsPage/>}></Route>
            <Route path="/coordinator/ssi-transactions" element={<CoordinatorSSITransactionsPage/>}></Route>
            <Route path="/coordinator/internship-offers" element={<CoordinatorInternshipOfferPage/>}></Route>
            <Route path="/coordinator/profile" element={<CoordinatorProfile/>}></Route>

            <Route path="/secretary/" element={<SecretaryHomePage />}></Route>
            <Route path="/secretary/home" element={<SecretaryHomePage />}></Route>
            <Route path="/secretary/ssi-transactions" element={<SecretarySSITransactionsPage />}></Route>
            <Route path="/secretary/notifications" element={<SecretaryNotificationsPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
