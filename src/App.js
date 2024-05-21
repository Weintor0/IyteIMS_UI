import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";

import FirmHomePage from "./pages/firm/home-page/FirmHomePage";
import FirmNotifications from "./pages/firm/notifications/FirmNotifications";
import FirmAnnouncements from "./pages/firm/internship-offers/FirmAnnouncements";
import AddAnnouncements from "./pages/firm/internship-offers/AddAnnouncements";

import SummerPracticeReports from "./pages/student/summer-practice-reports/SummerPracticeReports";
import SSITransactions from "./pages/student/ssi-transactions/SSITransactions";
import StudentHomePage from "./pages/student/home/StudentHome";
import StudentViewNotifications from "./pages/student/view-notifications/StudentViewNotifications";
import StudentSendApplicationLetter from "./pages/student/send-application-letter/StudentSendApplicationLetter";
import StudentSendApplicationLetter2 from "./pages/student/send-application-letter/StudentSendApplicationLetter2";
import StudentViewInternshipApplications from "./pages/student/view-internship-applications/StudentViewInternshipApplications";
import StudentSendApplicationForm from "./pages/student/send-application-form/StudentSendApplicationForm";

import CoordinatorHomePage from "./pages/coordinator/CoordinatorHomePage";
import CoordinatorInternshipAnnouncementPage from "./pages/coordinator/CoordinatorInternshipAnnouncementsPage";
import CoordinatorAnnouncementPage from "./pages/coordinator/CoordinatorAnnouncementPage";
import CoordinatorSurveyResultsPage from "./pages/coordinator/CoordinatorSurveyResultsPage";
import CoordinatorReviewFormsPage from "./pages/coordinator/CoordinatorReviewFormsPage";
import CoordinatorSSITransactionsPage from "./pages/coordinator/CoordinatorSSITransactionsPage";
import CoordinatorProfile from "./pages/coordinator/CoordinatorProfile";


function App() {
  return (
    <Router>
      <div className="App-container">
        <div className="Page-container">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="/firm/home" element={<FirmHomePage />}></Route>
            <Route path="/firm/notifications" element={<FirmNotifications />}></Route>
            <Route path="/firm/internship-offers" element={<FirmAnnouncements />}></Route>
            <Route path="/firm/publish-internship-offers" element={<AddAnnouncements />}></Route>

            <Route path="/student/ssi-transactions" element={<SSITransactions />}></Route>
            <Route path="/student/home" element={<StudentHomePage />}></Route>
            <Route path="/student/view-notifications" element={<StudentViewNotifications />}></Route>
            <Route path="/student/send-application-letter" element={<StudentSendApplicationLetter />}></Route>
            <Route path="/student/send-application-letter2" element={<StudentSendApplicationLetter2 />}></Route>
            <Route path="/student/internship-applications" element={<StudentViewInternshipApplications />}></Route>
            <Route path="/student/send-application-form" element={<StudentSendApplicationForm />}></Route>
            <Route path="/student/summer-practice-reports" element={<SummerPracticeReports />}></Route>

            <Route path="/coordinator/home" element={<CoordinatorHomePage />}></Route>
            <Route path="/coordinator/internshipannouncements" element={<CoordinatorInternshipAnnouncementPage/>}></Route>
            <Route path="/coordinator/announcements" element={<CoordinatorAnnouncementPage/>}></Route>
            <Route path="/coordinator/surveyresult" element={<CoordinatorSurveyResultsPage/>}></Route>
            <Route path="/coordinator/reviewforms" element={<CoordinatorReviewFormsPage/>}></Route>
            <Route path="/coordinator/ssitransactions" element={<CoordinatorSSITransactionsPage/>}></Route>
            <Route path="/coordinator/profile" element={<CoordinatorProfile/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
