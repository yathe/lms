"use client";
import React, { useState } from "react";
import "./page.css"; // Assuming you have some styles defined here

const LoanPage = () => {
  const banks = [
        {
            "name": "National Bank",
            "loanType": "Education Loan",
            "interestRate": "7.5% - 9.5%",
            "link": "https://www.nationalbank.com/education-loan"
        },
        {
            "name": "Student Care Bank",
            "loanType": "Tuition Loan",
            "interestRate": "6.8% - 8.5%",
            "link": "https://www.studentcarebank.com/tuition-loan"
        },
        {
            "name": "Future Finance Bank",
            "loanType": "Overseas Study Loan",
            "interestRate": "8.0% - 10.5%",
            "link": "https://www.futurefinance.com/overseas-loan"
        },
        {
            "name": "Global Education Bank",
            "loanType": "Postgraduate Loan",
            "interestRate": "6.5% - 9.0%",
            "link": "https://www.globaleducationbank.com/postgrad-loan"
        },
        {
            "name": "Knowledge First Bank",
            "loanType": "Undergraduate Loan",
            "interestRate": "5.5% - 8.0%",
            "link": "https://www.knowledgefirst.com/undergrad-loan"
        },
        {
            "name": "Bright Future Bank",
            "loanType": "Study Abroad Loan",
            "interestRate": "7.0% - 10.0%",
            "link": "https://www.brightfuturebank.com/study-abroad-loan"
        },
        {
            "name": "Youth Scholar Bank",
            "loanType": "Skill Development Loan",
            "interestRate": "6.0% - 8.5%",
            "link": "https://www.youthscholarbank.com/skill-loan"
        },
        {
            "name": "Dream Achiever Bank",
            "loanType": "Professional Courses Loan",
            "interestRate": "7.2% - 9.5%",
            "link": "https://www.dreamachieverbank.com/professional-loan"
        },
        {
            "name": "Campus Ally Bank",
            "loanType": "Career Development Loan",
            "interestRate": "6.8% - 9.0%",
            "link": "https://www.campusallybank.com/career-loan"
        },
        {
            "name": "EduGrowth Bank",
            "loanType": "Special Education Loan",
            "interestRate": "5.0% - 8.5%",
            "link": "https://www.edugrowthbank.com/special-education-loan"
        },
        {
            "name": "Infinity Bank",
            "loanType": "STEM Loan",
            "interestRate": "7.0% - 9.8%",
            "link": "https://www.infinitybank.com/stem-loan"
        },
        {
            "name": "Aspire Bank",
            "loanType": "Higher Education Loan",
            "interestRate": "6.5% - 8.8%",
            "link": "https://www.aspirebank.com/higher-education-loan"
        },
        {
            "name": "Global Scholars Bank",
            "loanType": "International Degree Loan",
            "interestRate": "8.2% - 10.0%",
            "link": "https://www.globalscholarsbank.com/international-loan"
        },
        {
            "name": "EduPrime Bank",
            "loanType": "Coaching Classes Loan",
            "interestRate": "6.0% - 8.0%",
            "link": "https://www.eduprimebank.com/coaching-loan"
        },
        {
            "name": "Career Maker Bank",
            "loanType": "Vocational Training Loan",
            "interestRate": "5.5% - 7.5%",
            "link": "https://www.careermakerbank.com/vocational-loan"
        },
        {
            "name": "Scholar Pro Bank",
            "loanType": "PhD Loan",
            "interestRate": "7.5% - 9.5%",
            "link": "https://www.scholarprobank.com/phd-loan"
        },
        {
            "name": "Next Step Bank",
            "loanType": "Online Learning Loan",
            "interestRate": "6.2% - 8.2%",
            "link": "https://www.nextstepbank.com/online-loan"
        },
        {
            "name": "Achiever Bank",
            "loanType": "Scholarship Support Loan",
            "interestRate": "5.8% - 7.8%",
            "link": "https://www.achieverbank.com/scholarship-loan"
        },
        {
            "name": "Bright Minds Bank",
            "loanType": "Research Loan",
            "interestRate": "7.0% - 10.0%",
            "link": "https://www.brightmindsbank.com/research-loan"
        },
        {
            "name": "Tech Learn Bank",
            "loanType": "IT Certification Loan",
            "interestRate": "6.8% - 9.2%",
            "link": "https://www.techlearnbank.com/it-loan"
        },
        {
            "name": "Pathway Bank",
            "loanType": "Distance Learning Loan",
            "interestRate": "5.5% - 7.8%",
            "link": "https://www.pathwaybank.com/distance-loan"
        },
        {
            "name": "Focus Future Bank",
            "loanType": "Integrated Courses Loan",
            "interestRate": "6.5% - 9.0%",
            "link": "https://www.focusfuturebank.com/integrated-loan"
        },
        {
            "name": "Fast Track Bank",
            "loanType": "Short-Term Courses Loan",
            "interestRate": "6.0% - 8.0%",
            "link": "https://www.fasttrackbank.com/short-term-loan"
        },
        {
            "name": "Career Boost Bank",
            "loanType": "Graduate Studies Loan",
            "interestRate": "7.0% - 9.8%",
            "link": "https://www.careerboostbank.com/graduate-loan"
        },
        {
            "name": "Excel Bank",
            "loanType": "Skill Enhancement Loan",
            "interestRate": "5.8% - 8.0%",
            "link": "https://www.excelbank.com/skill-enhancement-loan"
        },
        {
            "name": "EduLeader Bank",
            "loanType": "Medical Studies Loan",
            "interestRate": "6.5% - 9.2%",
            "link": "https://www.eduleaderbank.com/medical-loan"
        },
        {
            "name": "Bright Path Bank",
            "loanType": "MBA Loan",
            "interestRate": "7.2% - 9.5%",
            "link": "https://www.brightpathbank.com/mba-loan"
        },
        {
            "name": "NextGen Bank",
            "loanType": "Engineering Loan",
            "interestRate": "6.8% - 9.0%",
            "link": "https://www.nextgenbank.com/engineering-loan"
        },
        {
            "name": "Lifelong Learning Bank",
            "loanType": "Continuing Education Loan",
            "interestRate": "5.5% - 8.5%",
            "link": "https://www.lifelonglearningbank.com/continuing-loan"
        },
        {
            "name": "EduGlobe Bank",
            "loanType": "Cultural Exchange Program Loan",
            "interestRate": "7.0% - 10.0%",
            "link": "https://www.eduglobe.com/cultural-exchange-loan"
        },
        {
            "name": "EduNova Bank",
            "loanType": "Law School Loan",
            "interestRate": "6.5% - 8.8%",
            "link": "https://www.edunova.com/law-loan"
        },
        {
            "name": "Skill Horizon Bank",
            "loanType": "Art School Loan",
            "interestRate": "6.8% - 9.0%",
            "link": "https://www.skillhorizon.com/art-school-loan"
        },
        {
            "name": "Innovation Bank",
            "loanType": "Science Research Loan",
            "interestRate": "7.0% - 9.5%",
            "link": "https://www.innovationbank.com/science-research-loan"
        },
        {
            "name": "Future Bright Bank",
            "loanType": "Education Loan for Girls",
            "interestRate": "5.0% - 7.5%",
            "link": "https://www.futurebrightbank.com/girls-loan"
        },
        {
            "name": "Pro Scholars Bank",
            "loanType": "Competitive Exams Loan",
            "interestRate": "6.5% - 8.2%",
            "link": "https://www.proscholars.com/competitive-loan"
        },
        {
            "name": "StudyWell Bank",
            "loanType": "Foundation Courses Loan",
            "interestRate": "5.8% - 8.0%",
            "link": "https://www.studywellbank.com/foundation-loan"
        },
        {
            "name": "Skill Up Bank",
            "loanType": "Internship Support Loan",
            "interestRate": "6.2% - 9.0%",
            "link": "https://www.skillup.com/internship-loan"
        },
        {
            "name": "Knowledge Build Bank",
            "loanType": "Diploma Loan",
            "interestRate": "6.0% - 8.5%",
            "link": "https://www.knowledgebuild.com/diploma-loan"
        }    
];
    const governmentSchemes = [
        {
            scheme: "Padho Pardesh Scheme",
            details: "Interest subsidy for economically weaker sections studying abroad.",
            eligibility: "Family income below ₹6 lakhs per annum."
        },
        {
            scheme: "Dr. Ambedkar Central Sector Scheme",
            details: "Interest subsidy for OBC and EBC students pursuing higher education abroad.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "Vidya Lakshmi Portal",
            details: "Integrated platform for students to access multiple loan options.",
            eligibility: "All students pursuing higher studies."
        },
        {
            scheme: "National Means-Cum-Merit Scholarship",
            details: "Scholarship to meritorious students from economically weaker sections.",
            eligibility: "Family income below ₹1.5 lakhs per annum."
        },
        {
            scheme: "Pragati Scholarship for Girls",
            details: "Scholarship for girl students in technical education.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "Saksham Scholarship Scheme",
            details: "Scholarship for differently-abled students pursuing technical education.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "Post Matric Scholarship for SC Students",
            details: "Financial assistance for SC students in higher education.",
            eligibility: "Family income below ₹2.5 lakhs per annum."
        },
        {
            scheme: "National Fellowship for SC Students",
            details: "Fellowship for SC students pursuing MPhil and PhD.",
            eligibility: "No family income limit for SC students."
        },
        {
            scheme: "Top Class Education Scheme for SC Students",
            details: "Scholarships for SC students studying in top institutions.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "INSPIRE Scholarship",
            details: "Scholarship for top-performing science students.",
            eligibility: "Top 1% of students in 12th standard."
        },
        {
            scheme: "Maulana Azad National Fellowship",
            details: "Fellowship for minority students pursuing MPhil and PhD.",
            eligibility: "Family income below ₹6 lakhs per annum."
        },
        {
            scheme: "AICTE Pragati Scholarship for Girls",
            details: "Scholarship for girl students in technical courses.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "AICTE Saksham Scholarship",
            details: "Scholarship for differently-abled students in technical courses.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "Central Sector Scheme of Scholarships for College and University Students",
            details: "Scholarship for meritorious students from economically weaker sections.",
            eligibility: "Family income below ₹4.5 lakhs per annum."
        },
        {
            scheme: "National Overseas Scholarship",
            details: "Scholarships for SC/ST students studying abroad.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "PM Scholarship Scheme",
            details: "Scholarship for the wards of ex-servicemen.",
            eligibility: "Wards of ex-servicemen with good academic performance."
        },
        {
            scheme: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
            details: "Fellowship for students interested in research in science.",
            eligibility: "Students of 11th, 12th, and first-year undergraduates in science."
        },
        {
            scheme: "PM CARES for Children Scheme",
            details: "Support for children orphaned during the COVID-19 pandemic.",
            eligibility: "Children orphaned during COVID-19 and below 18 years."
        },
        {
            scheme: "Dhanalakshmi Scheme",
            details: "Scholarship for girl students in rural areas.",
            eligibility: "Available for girl students in select rural areas."
        },
        {
            scheme: "EWS Scholarship Scheme",
            details: "Scholarship for students from economically weaker sections.",
            eligibility: "Family income below ₹3 lakhs per annum."
        },
        {
            scheme: "Post Matric Scholarship for Minority Students",
            details: "Scholarship for minority students in higher education.",
            eligibility: "Family income below ₹2 lakhs per annum."
        },
        {
            scheme: "Pre Matric Scholarship for Minority Students",
            details: "Scholarship for minority students up to 10th standard.",
            eligibility: "Family income below ₹1 lakh per annum."
        },
        {
            scheme: "Post Matric Scholarship for ST Students",
            details: "Financial assistance for ST students in higher education.",
            eligibility: "Family income below ₹2.5 lakhs per annum."
        },
        {
            scheme: "Mukhya Mantri Medhavi Vidyarthi Yojana",
            details: "Scholarship for meritorious students in Madhya Pradesh.",
            eligibility: "Students scoring above 70% in 12th standard."
        },
        {
            scheme: "Chief Minister's Urban Leaders Fellowship",
            details: "Fellowship for young leaders in urban governance.",
            eligibility: "Young professionals with relevant skills."
        },
        {
            scheme: "PM YASASVI Scheme",
            details: "Scholarships for OBC and EBC students for high school.",
            eligibility: "Family income below ₹2.5 lakhs per annum."
        },
        {
            scheme: "Scholarships for Top Class Education for Students with Disabilities",
            details: "Scholarships for students with disabilities in higher education.",
            eligibility: "Family income below ₹8 lakhs per annum."
        },
        {
            scheme: "Bihar Student Credit Card Scheme",
            details: "Education loan scheme for students in Bihar.",
            eligibility: "Students of Bihar pursuing higher education."
        },
        {
            scheme: "Delhi Merit Scholarship",
            details: "Scholarship for meritorious students in Delhi.",
            eligibility: "Students with excellent academic performance in Delhi."
        },
        {
            scheme: "Rajasthan Mukhyamantri Yuva Sambal Yojana",
            details: "Scholarship for unemployed youth in Rajasthan.",
            eligibility: "Graduates with no family income."
        },
        {
            scheme: "UP Scholarship",
            details: "Scholarship for students in Uttar Pradesh.",
            eligibility: "Students of UP meeting academic and income criteria."
        },
        {
            scheme: "Himachal Pradesh Swaran Jayanti Middle Merit Scholarship",
            details: "Scholarship for meritorious middle school students in HP.",
            eligibility: "Students meeting academic performance criteria."
        },
        {
            scheme: "Tamil Nadu Post Matric Scholarship",
            details: "Scholarship for students in Tamil Nadu.",
            eligibility: "Post matric students meeting academic and income criteria."
        },
        {
            scheme: "Chandigarh Post Matric Scholarship",
            details: "Scholarship for SC students in Chandigarh.",
            eligibility: "SC students from Chandigarh."
        },
        {
            scheme: "Mizoram State Scholarship",
            details: "Scholarship for students in Mizoram.",
            eligibility: "Students meeting academic and income criteria."
        },
        {
            scheme: "Goa Dayanand Bandodkar Scheme",
            details: "Scholarship for meritorious students in Goa.",
            eligibility: "Meritorious students in Goa."
        },
        {
            scheme: "West Bengal Talent Support Program",
            details: "Scholarship for minority students in West Bengal.",
            eligibility: "Minority students from West Bengal."
        },
        {
            scheme: "Punjab Chief Minister Scholarship Scheme",
            details: "Scholarship for SC students in Punjab.",
            eligibility: "SC students meeting academic and income criteria."
        },
        {
            scheme: "Telangana E-Pass Scholarship",
            details: "Scholarship for students in Telangana.",
            eligibility: "Students meeting academic and income criteria."
        },
        {
            scheme: "Kerala State Higher Education Council Scholarship",
            details: "Scholarship for students in Kerala.",
            eligibility: "Students meeting academic performance criteria."
        },
        {
            scheme: "Karnataka Vidyasiri Scholarship",
            details: "Scholarship for students in Karnataka.",
            eligibility: "Students meeting academic and income criteria."
        }    
  ];

  const [filteredBanks, setFilteredBanks] = useState(banks);
  const [filteredSchemes, setFilteredSchemes] = useState(governmentSchemes);
  const [loanType, setLoanType] = useState("");
  const [maxInterestRate, setMaxInterestRate] = useState("");
  const [incomeEligibility, setIncomeEligibility] = useState("");

  const handleFilter = () => {
    const newFilteredBanks = banks.filter((bank) => {
        // Split interest rate range into an array of two values
        const rateRange = bank.interestRate.split("-").map((rate) => parseFloat(rate.replace("%", "").trim()));
      
        // Get the minimum rate from the range
        const minRate = rateRange[0];
      
        // Parse the maxRate from the input or set to Infinity if not provided
        const maxRate = maxInterestRate ? parseFloat(maxInterestRate) : Infinity;
      
        // Return banks matching loanType and having interest rates within the specified range
        return (!loanType || bank.loanType.toLowerCase().includes(loanType.toLowerCase())) && minRate <= maxRate;
      });
      
    setFilteredBanks(newFilteredBanks);

    const newFilteredSchemes = governmentSchemes.filter((scheme) => 
      !incomeEligibility || scheme.eligibility.includes(incomeEligibility)
    );
    setFilteredSchemes(newFilteredSchemes);
  };

  return (
    <div className="loanPage">
      {/* Header Section */}
      <header className="header">
        <h1>Student Loan Portal</h1>
        <p>Your guide to the best student loans and government schemes.</p>
      </header>

      {/* Filter Section */}
      <section className="filterSection">
        <div>
          <label>Loan Type:</label>
          <input
            type="text"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            placeholder="e.g., Education Loan"
          />
        </div>
        <div>
          <label>Max Interest Rate (%):</label>
          <input
            type="number"
            value={maxInterestRate}
            onChange={(e) => setMaxInterestRate(e.target.value)}
            placeholder="e.g., 9"
          />
        </div>
        <div>
          <label>Income Eligibility:</label>
          <input
            type="text"
            value={incomeEligibility}
            onChange={(e) => setIncomeEligibility(e.target.value)}
            placeholder="e.g., ₹8 lakhs"
          />
        </div>
        <button onClick={handleFilter} className="filterButton">Filter Loans and Schemes</button>
      </section>

      {/* Bank Loan Table Section */}
      <section className="tableSection">
        <h2>Banks Providing Education Loans</h2>
        <table className="loanTable">
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Loan Type</th>
              <th>Interest Rate</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {filteredBanks.map((bank, index) => (
              <tr key={index}>
                <td>{bank.name}</td>
                <td>{bank.loanType}</td>
                <td>{bank.interestRate}</td>
                <td>
                  <a href={bank.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Government Schemes Table Section */}
      <section className="tableSection">
        <h2>Government Schemes for Students</h2>
        <table className="schemeTable">
          <thead>
            <tr>
              <th>Scheme Name</th>
              <th>Details</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchemes.map((scheme, index) => (
              <tr key={index}>
                <td>{scheme.scheme}</td>
                <td>{scheme.details}</td>
                <td>{scheme.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default LoanPage;
