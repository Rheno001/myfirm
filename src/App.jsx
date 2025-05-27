import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import ReportProblem from './pages/ReportProblem';


// Make a Claim Steps
import CreateAccount from './pages/MakeClaim/CreateAccount';
import ClaimEligibility from './pages/MakeClaim/ClaimEligibility';
import ClaimantDetails from './pages/MakeClaim/ClaimantDetails';
import RespondentDetails from './pages/MakeClaim/RespondentDetails';
import ClaimDetails from './pages/MakeClaim/ClaimDetails';
import EvidenceUpload from './pages/MakeClaim/EvidenceUpload';
import FinalConfirmation from './pages/MakeClaim/FinalConfirmation';

// Prosecute Claim
import ProsecuteLogin from './pages/ProsecuteClaim/ProsecuteLogin';
import AddReasons from './pages/ProsecuteClaim/AddReasons';
import MoreEvidence from './pages/ProsecuteClaim/MoreEvidence';
import SubmitClaim from './pages/ProsecuteClaim/SubmitClaim';
import PayFee from './pages/ProsecuteClaim/PayFee';

// Defend Claim
import DefendLogin from './pages/DefendClaim/DefendLogin';
import ViewClaim from './pages/DefendClaim/ViewClaim';
import SubmitDefence from './pages/DefendClaim/SubmitDefence';
import DefenceEvidence from './pages/DefendClaim/DefenceEvidence';
import ConfirmDefence from './pages/DefendClaim/ConfirmDefence';

export default function AppRoutes() {
  return (
    <>
    <Router>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/report-problem" element={<ReportProblem />} />

        {/* Make a Claim */}
        <Route path="/make-claim/create-account" element={<CreateAccount />} />
        <Route path="/make-claim/claim-eligibility" element={<ClaimEligibility />} />
        <Route path="/make-claim/claimant-details" element={<ClaimantDetails />} />
        <Route path="/make-claim/respondent-details" element={<RespondentDetails />} />
        <Route path="/make-claim/claim-details" element={<ClaimDetails />} />
        <Route path="/make-claim/evidence-upload" element={<EvidenceUpload />} />
        <Route path="/make-claim/final-confirmation" element={<FinalConfirmation />} />

        {/* Prosecute a Claim */}
        <Route path="/prosecute/login" element={<ProsecuteLogin />} />
        <Route path="/prosecute/add-reasons" element={<AddReasons />} />
        <Route path="/prosecute/more-evidence" element={<MoreEvidence />} />
        <Route path="/prosecute/submit" element={<SubmitClaim />} />
        <Route path="/prosecute/pay-fee" element={<PayFee />} />

        {/* Defend a Claim */}
        <Route path="/defend/login" element={<DefendLogin />} />
        <Route path="/defend/view-claim" element={<ViewClaim />} />
        <Route path="/defend/submit-defence" element={<SubmitDefence />} />
        <Route path="/defend/evidence" element={<DefenceEvidence />} />
        <Route path="/defend/confirm" element={<ConfirmDefence />} />
      </Routes>
    </Router>
    </>
  );
}

