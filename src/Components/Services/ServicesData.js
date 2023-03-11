import image1 from "../../Assets/Services/architecture.png";
import image2 from "../../Assets/Services/planning.png";
import image3 from "../../Assets/Services/interrios.png";
import image4 from "../../Assets/Services/consultation.png";

import { FcIdea } from 'react-icons/fc'
import { FaProjectDiagram } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'
import { VscGraph } from 'react-icons/vsc'

export const services = [
  {
    image: image1,
    name: "Architecture",
    text: " This service typically involves the design, planning, and construction of buildings and other structures, including things like drafting floor plans, creating 3D models, and overseeing construction.",
  },
  {
    image: image2,
    name: "Master Planning",
    text: "Comprehensive plan for the development of a property or area. This includes things like zoning, land use, infrastructure, and overall design concept for the long-term vision and goals of the project."
  },
  {
    image: image3,
    name: "Interiors",
    text: "At Reel Archer Studios, we offers design and decoration of the interior spaces of a building, including things like floor plans, color schemes, and the selection of furniture and decor.",
  },
  {
    image: image4,
    name: "Consultation",
    text: "We meet with clients to discuss their needs and goals for a project, and provide them with expert advice and guidance on how to best achieve those goals.",
  },
];


export const profiles = [
    {
        name: "Ideas + People",
        text: "We are committed to continuous education & to be aware of all the latest trends, innovative materials, achievements in furniture, interior and exterior design technologies to deliver superior results and achieve client satisfaction",
        icon: FcIdea,
    },
    {
        name: "Inspire + Connect",
        text: "Our designers, engineers, and architects use their experience and innovative thinking to create new standards in design. They are highly trained to ensure each client gets the best experience possible.",
        icon: FaProjectDiagram,
    },
    {
        name: "Quality + Commitment",
        text: "We strive for excellence in everything we do. We make all the efforts to provide our clients with the exceptional quality of services as well as meeting their needs, budgets, and all the industry standards.",
        icon: FaAward,
    },
    {
        name: "Innovate + Improve",
        text: "Our goal is to bring thoughtful and innovative ideas and design solutions, maximizing the efficiency and functionality of any project, no matter its size, complexity, or budget. We keep working and evolving every day.",
        icon: VscGraph,
    },
]