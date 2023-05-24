// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import IProject from "@/types/IProject";

const projects = [{
  "name": "🛒 Order Management System",
  "slug": "oms",
  "description": "Application that allows users to shop online, browse product catalogs, add items to a cart, and complete purchases. It also provides payment processing, and product & order management capabilities.",
  "thumbnail": "/images/portfolio/oms/thumbnail.jpg",
  "tags": ["Microservice", "Clean Architecture", "Java", "Spring Boot", "NextJS", "Tailwind", "CI/CD", "Kafka", "Websocket"],
  "demoUrl": "",
  "repositoryUrl": "https://github.com/Ecommerce-Capstone",
  "isArchived": false
},{
  "name": "🦠 Waspada Covid19 (Corona Virus Dashboard)",
  "slug": "waspada-covid19",
  "description": "Dashboard of statistics on the growth of the COVID-19 virus in Indonesia and the world. Data taken from api kawalancorona.com",
  "thumbnail": "/images/portfolio/waspada-covid19/thumbnail.jpg",
  "tags": ["Javascript", "REST API"],
  "demoUrl": "",
  "repositoryUrl": "https://github.com/daimus/waspada-covid19",
  "isArchived": false
},{
  "name": "🪙 KasKlas (Cash Management App)",
  "slug": "kasklas",
  "description": "Application for recording cash inflows and disbursements. Can make recurring and one-time bills.",
  "thumbnail": "/images/portfolio/kasklas/thumbnail.jpg",
  "tags": ["Android","Java", "CodeIgniter", "MySQL", "REST API"],
  "demoUrl": "",
  "repositoryUrl": "https://github.com/daimus/kasklas-android",
  "isArchived": false
},{
  "name": "📶 DNMS (Network Monitoring System)",
  "slug": "dnms",
  "description": "Network monitoring application for MikroTik and Ubiquiti devices. Utilizing websocket technology to get real-time data",
  "thumbnail": "/images/portfolio/dnms/thumbnail.jpg",
  "tags": ["Javascript", "MySQL", "Websocket", "SNMP"],
  "demoUrl": "",
  "repositoryUrl": "https://github.com/daimus/dnms",
  "isArchived": false
},{
  "name": "⚽️ Premiere Leauge PWA",
  "slug": "premiere-leauge-pwa",
  "description": "Premiere league schedule and standings application. Developed with PWA technology so that it can be installed and used offline",
  "thumbnail": "/images/portfolio/premiere-leauge-pwa/thumbnail.jpg",
  "tags": ["Javascript", "PWA"],
  "demoUrl": "https://premier-leauge-pwa.web.app/",
  "repositoryUrl": "https://github.com/daimus/premier-leauge-pwa",
  "isArchived": false
},{
  "name": "⛓ s.daimus.id",
  "slug": "s.daimus.id",
  "description": "Short link/Bio link to share bio and link. Multi language usable and dark or light theme. Accompanied by a donate button connected to a crypto wallet",
  "thumbnail": "/images/portfolio/s.daimus.id/thumbnail.jpg",
  "tags": ["NextJS", "dApp", "Web3", "TailwindCSS"],
  "demoUrl": "https://s.daimus.id",
  "repositoryUrl": "https://github.com/daimus/s.daimus.id",
  "isArchived": false
},{
  "name": "🙋‍ daimus.id",
  "slug": "daimus.id",
  "description": "My personal website in lieu of a conventional resume.",
  "thumbnail": "/images/portfolio/daimus.id/thumbnail.jpg",
  "tags": ["NuxtJS", "TailwindCSS"],
  "demoUrl": "https://daimus.id",
  "repositoryUrl": "https://github.com/daimus/daimus.id",
  "isArchived": false
},{
  "name": "📝 3GWBQ (Quiz App)",
  "slug": "3gwbq",
  "description": "Quiz application with 3 types of questions, namely multiple choice, matching words, and filling in empty words",
  "thumbnail": "/images/portfolio/3gwbq/thumbnail.jpg",
  "tags": ["PHP", "CodeIgniter", "MySQL"],
  "demoUrl": "",
  "repositoryUrl": "",
  "isArchived": false
},{
  "name": "👨🏻‍🏫 Lecturer Assessment App",
  "slug": "apkd",
  "description": "Student assessment application to lecturers. Determination of the best lecturers using the profile matching algorithm",
  "thumbnail": "/images/portfolio/apkd/thumbnail.jpg",
  "tags": ["Laravel", "Profile Matching"],
  "demoUrl": "",
  "repositoryUrl": "",
  "isArchived": false
},{
  "name": "🏦 Credit Collectability Prediction App",
  "slug": "collectability-prediction",
  "description": "A debtor decision support system to assess the potential for bad loans from creditors using the 5P principle and the backpropagation neural network algorithm",
  "thumbnail": "/images/portfolio/collectability-prediction/thumbnail.jpg",
  "tags": ["Backpropagation", "Python", "PyQT"],
  "demoUrl": "",
  "repositoryUrl": "",
  "isArchived": false
},{
  "name": "🏫 SMK Islam Kanigoro",
  "slug": "smkikanigoro",
  "description": "Web profile of Kanigoro Blitar Islamic Vocational School",
  "thumbnail": "/images/portfolio/smkikanigoro/thumbnail.jpg",
  "tags": ["Wordpress"],
  "demoUrl": "https://smkikanigoro.sch.id",
  "repositoryUrl": "",
  "isArchived": false
},{
  "name": "👩‍⚖️ Decision Support System Moora",
  "slug": "dssmoora",
  "description": "Decision support system with moora method",
  "thumbnail": "",
  "tags": ["Moora", "PHP"],
  "demoUrl": "",
  "repositoryUrl": "https://github.com/daimus/dss-moora",
  "isArchived": false
},{
  "name": "🚜 Vehicle Reservation System",
  "slug": "vehicle-reservation",
  "description": "Vehicle reservation information system with 2 level licensing. Equipped with vehicle usage reports, fuel consumption, and vehicle maintenance reminders",
  "thumbnail": "",
  "tags": ["Laravel", "VUE"],
  "demoUrl": "",
  "repositoryUrl": "",
  "isArchived": false
},{
  "name": "✉️ Integrated Document Service Application",
  "slug": "letr",
  "description": "Online document request application",
  "thumbnail": "",
  "tags": ["Laravel", "NuxtJS", "REST API"],
  "demoUrl": "",
  "repositoryUrl": "",
  "isArchived": false
}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  res.status(200).json(projects)
}
