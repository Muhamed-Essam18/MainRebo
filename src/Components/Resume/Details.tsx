const details = [
  {
    id: "hr",
    keyRes: [
      "Sourced, screened, and interviewed candidates, guiding new hires through the onboarding process",
      "Assisted in creating, updating, and applying HR policies and company guidelines, ensuring adherence to employment laws and regulations",
      "Addressed employee inquiries, managed conflict resolution, and fostered a positive work environment",
      "Supported performance review processes and employee development initiatives",
      "Assisted with benefits enrollment and administration",
    ],
  },
  {
    id: "od",
    keyRes: [
      "Led entities to increase organizational performance & health, ensuring evolution according to the ODM.",
      "National OD Model Creation and Analysis.",
      "Responsible for grouping and development of tiering system.",
      "Implemented OD Process",
      "Customized and coordinated MC services based on local entities' needs.",
      "Understood and downscaled National strategies at the local level.",
      "Network experience: LCs planning and Re-planning process.",
      "Supported BoP management.",
      "Analyzed Local Committees' situations according to SONA or other tools and defined clear action plans with OD managers",
      "Network standards (commission heads & coaches).",
      "Coaching and LCs visits.",
    ],

    keyResults: [
      "Designed and executed a national grouping framework to segment and manage Local Committees based on performance indicators and organizational maturity.",
      "Built a strategic tiering system aligned with global OD standards, enabling scalable development tracking and targeted interventions.",
      "Developed tailored growth paths for each tier, providing clear, actionable steps to elevate performance and structural sustainability.",
      "Coached and supported 7 Local Committees, resulting in a 77% increase in operational output, driven by targeted development plans and continuous performance review.",
      "Collaborated cross-functionally with department leads in Talent, Finance, and Program Operations to embed organizational development insights into strategic planning, team coaching, and performance optimization.",
    ],
  },
  {
    id: "lcp",
    keyRes: [
      "Led and managed the local executive board of 7 individuals (Operations, HR, Finance, B2C, BD) and a network of 50 members.",
      "Ensured financial & legal sustainability of the local chapter, accountable to the local plenary, national plenary, Internal Auditor, and the Supervisory Group.",
      "Managed relationships with supervisory group and key partners.",
    ],
    keyResults: [
      "Upgraded the Local committee model from startup to expansion",
      "Grew operations by 610%.",
      "Grew financially from being in debt to leaving a healthy financial reserve.",
      "Established AIESEC in Alexandria Office and maintained its financial sustainability.",
    ],
  },
  {
    id: "operations",
    keyRes: [
      "Led the launch of a new product, 'Outgoing Global Talent/Teacher,' at AIESEC in Alexandria. Built operational infrastructure, streamlined processes, and ensured a solid foundation for sustainable growth and product success.",
      "Positioned AIESEC in Alexandria as the top-performing entity nationally among 19 local committees and ranked 9th globally out of 800+ committees.",
      "Established a robust infrastructure and talent pipeline, ensuring the product’s continued success and securing the top national position for a second consecutive year.",
      "Achieved Level 2 sustainability for the product, solidifying long-term operational effectiveness.",
    ],
  },
  {
    id: "localConference",
    keyRes: [
      "Organized multiple local conferences and summits for ~100 delegates, coordinating venues, suppliers, agendas, and delegate experience management",
    ],
  },
  {
    id: "nationalConference",
    keyRes: [
      "Successfully managed national conferences hosting around 500 delegates, overseeing logistics, budgeting, and on-ground operations",
    ],
  },
  {
    id: "frontEnd",
    keyRes: [
      "Worked as a freelancer for one year as a Front-end Web developer using HTML, CSS, Javascript, J-query, and Bootstrap.",
    ],
  },
  {
    id: "contact",
    keyRes: [
      "Email: muhamedessam18@gmail.com",
      "LinkedIn: https://www.linkedin.com/in/muhamed-essam9a8983247",
      "Phone: +201272570775",
      "Location: Alexandria, Egypt",
    ],
  },
];
const Details = (props) => {
  const id = props.id;
  const match = details.find((x) => x.id === id);
  let content;
  if (match?.keyResults) {
    content = (
      <>
        <h1 className="text-xl mt-5 font-bold text-left">
          Key Responsibilites
        </h1>
        <ul className="list-disc flex flex-col items-start pt-5 pl-5">
          {match?.keyRes.map((item, i) => (
            <li key={i} className="text-left p-1">
              {item}
            </li>
          ))}
        </ul>
        <h1 className="text-xl mt-5 font-bold text-left">Key Results</h1>
        <ul className="list-disc flex flex-col items-start pt-5 pl-5">
          {match?.keyResults.map((item, i) => (
            <li key={i} className="text-left p-1">
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    content = (
      <ul className="list-disc flex flex-col items-start pt-5 pl-5">
        {match?.keyRes.map((item, i) => (
          <li key={i} className="text-left p-1">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Details;
