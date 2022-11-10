import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TypeAnimation from "react-type-animation";

const sliderItems = [
  {
    index: 0,
    title: "Multi-wallet Management",
    text: "Connect all your organizational wallets to monitor net treasury value, digital asset allocation and  transaction history in multiple chains. Manage your DAO treasury expenses and track your token flow across digital wallets in a single simplified dashboard.",
    src: "Icons/Header/Dashboard_header.svg",
  },
  {
    index: 1,
    title: "Contributor Management",
    text: "Build your workstreams by onboarding your full & part-time contributors. Assign specific role, compensation type and amount in multiple tokens to each contributor and manage them.",
    src: "Icons/Slider/Contributor.svg",
  },
  {
    index: 2,
    title: "Payroll Management",
    text: "Automate your recurring payments to meet payment deadlines. Manage crypto payroll and mass payouts in multiple crypto currencies to keep the process organized, easy and efficient.",
    src: "Icons/Slider/Payroll.svg",
  },
  {
    index: 3,
    title: "Expenses Management",
    text: "Share payment link with your DAO community. Manage grant, bug bounty, airdrops, contributor payouts  and reimbursements by tracking requests and approvals.",
    src: "Icons/Slider/Request.svg",
  },
  {
    index: 4,
    title: "Collaborative Budgeting",
    text: "Prepare a fully transparent budget cycle for your organization. Share insights with your DAO community for collective decision making.",
    src: "Icons/Slider/Budget.svg",
  },
  {
    index: 5,
    title: "Risk Management",
    text: "Monitor risks in crypto assets, NFTs and DeFi protocols to mitigate potential losses associated with technical and economic risks. Manage liquidity risk by analyzing your treasury runway with portfolio stress tests and scenarios.",
    src: "Icons/Slider/Risk.svg",
  },
  {
    index: 6,
    title: "Portfolio Tracking",
    text: "Track your DeFi investments and assets across chains, analyze portfolio historical data and in-depth P&L to make necessary financial decisions in DAO treasury management.",
    src: "Icons/Slider/Portfolio.svg",
  },
  {
    index: 7,
    title: "Bookkeeping & Accounting",
    text: "Record and track your transactions with custom labeling. Export important financial data with just a click to prepare financial reports.",
    src: "Icons/Slider/Transactions.svg",
  },
  {
    index: 8,
    title: "Insights & Reporting",
    text: "Monitor your budget expenses and token flow movement with detailed insights in one place. Understand how money is spent and where it is spent across your wallets in multiple networks, through real-time reporting.",
    src: "Icons/Slider/Insights.svg",
  },
];

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const DashboardSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 0
          ? "Icons/SliderButtons/dashboard_active.png"
          : "Icons/SliderButtons/dashboard.png"
      }
      alt="Dashboard"
    />
  );

  const ContributorSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 1
          ? "Icons/SliderButtons/team_active.png"
          : "Icons/SliderButtons/team.png"
      }
      alt="Teams"
    />
  );

  const PayrollSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 2
          ? "Icons/SliderButtons/payroll_active.png"
          : "Icons/SliderButtons/payroll.png"
      }
      alt="Payroll"
    />
  );

  const RequestsSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 3
          ? "Icons/SliderButtons/requests_active.png"
          : "Icons/SliderButtons/requests.png"
      }
      alt="Requests"
    />
  );

  const BudgetsSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 4
          ? "Icons/SliderButtons/budget_active.png"
          : "Icons/SliderButtons/budget.png"
      }
      alt="Budgets"
    />
  );

  const RiskSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 5
          ? "Icons/SliderButtons/risk_active.png"
          : "Icons/SliderButtons/risk.png"
      }
      alt="Risk"
    />
  );

  const PortfolioSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 6
          ? "Icons/SliderButtons/Portfolio_Active.svg"
          : "Icons/SliderButtons/portfolio.svg"
      }
      alt="Teams"
    />
  );

  const TransactionsSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 7
          ? "Icons/SliderButtons/transaction_active.png"
          : "Icons/SliderButtons/transaction.png"
      }
      alt="Transaction"
    />
  );

  const InsightSVG = ({ active = false }) => (
    <img
      className={`w-5 h-5`}
      src={
        currentSlideIndex === 8
          ? "Icons/SliderButtons/insight_active.png"
          : "Icons/SliderButtons/insight.png"
      }
      alt="Insight"
    />
  );


  const sliderNav = [
    {
      index: 0,
      icon: DashboardSVG,
    },
    {
      index: 1,
      icon: ContributorSVG,
    },
    {
      index: 2,
      icon: PayrollSVG,
    },
    {
      index: 3,
      icon: RequestsSVG,
    },
    {
      index: 4,
      icon: BudgetsSVG,
    },
    {
      index: 5,
      icon: RiskSVG,
    },
    {
      index: 6,
      icon: PortfolioSVG,
    },
    {
      index: 7,
      icon: TransactionsSVG,
    },
    {
      index: 8,
      icon: InsightSVG,
    },
  ];

  return (
    <div className="bg-white w-full text-[2.75rem] font-semibold ">
      <div className="w-full flex justify-center">
        <div className="text-5xl text-center] my-36">
          One platform for{" "}
          <TypeAnimation
            className="text-primary font-bold"
            cursor={true}
            sequence={[
              "Multi-wallet Management",
              1000,
              "Contributor Management",
              1000,
              "Payroll Management",
              1000,
              "Expense Management",
              1000,
              "Collaborative Budgeting",
              1000,
              "Risk Management",
              1000,
              "Portfolio Tracking",
              1000,
              "Bookkeeping & Accounting",
              1000,
              "Insights & Reporting",
              1000,
            ]}
            wrapper={"span"}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="bg-[url('/public/Icons/background_2.jpg')] bg-local sm:bg-auto bg-cover bg-no-repeat mb-36">
        <div className="w-full container mx-auto h-full pt-14 pb-28 relative">
          <Swiper id="main" thumbs={{ swiper: thumbsSwiper }}>
            {sliderItems.map((item) => {
              return (
                <SwiperSlide
                  key={`slide-${item.index}`}
                  className="lg:grid lg:grid-cols-2 gap-10"
                >
                  <div className="left-silde px-32 lg:px-0">
                    <img
                      draggable={false}
                      src={item.src}
                      className="w-full lg:w-[36.75rem] rounded-sm"
                      alt=""
                    />
                  </div>
                  <div className="h-full mt-6 px-32 lg:px-0 lg:pr-20">
                    <h1 className="text-4xl mb-5">{item.title}</h1>
                    <p className="text-[#707070]  text-base">{item.text}</p>
                    <button className="border-[1px] hidden lg:block  mt-3 py-2 border-solid border-[#FF7348] w-40 text-base text-[#FF7348] font-semibold rounded-md">
                      <a href="https://demo.remox.io/">
                         View Demo
                      </a>
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex justify-center mt-10 lg:mt-0 items-center lg:absolute right-[15.2%] bottom-[28%] ">
            <Swiper id="thumbs" slidesPerView={9} onSwiper={setThumbsSwiper}>
              {sliderNav.map((nav) => {
                return (
                    <SwiperSlide
                      onClick={() => {
                        setCurrentSlideIndex(nav.index);
                      }}
                      key={`thumb-${nav.index}`}
                      className={`${
                        currentSlideIndex === nav.index
                          ? "bg-[#FADED5]"
                          : "bg-white"
                      }  !w-10 !h-10 rounded-[4px] flex justify-center items-center  ml-2 !shadow-custom z-20 cursor-pointer `}
                    >
                      {nav.icon}
                    </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
