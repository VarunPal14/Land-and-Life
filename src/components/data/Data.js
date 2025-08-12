import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faCheck, faHeart, faLightbulb, faTrophy, faX } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const nav = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "services",
      path: "/services",
    },
    {
      text: "blog",
      path: "/blog",
    },
    {
      text: "pricing",
      path: "/pricing",
    },
    {
      text: "contact",
      path: "/contact",
    },
  ]
  export const featured = [
    {
      cover: "../images/hero/h1.png",
      name: "Family House",
      total: "122 Properties",
    },
    {
      cover: "../images/hero/h2.png",
      name: "House & Villa",
      total: "155 Properties",
    },
    {
      cover: "../images/hero/h3.png",
      name: "Apartment",
      total: "300 Properties",
    },
    {
      cover: "../images/hero/h4.png",
      name: "Office & Studio",
      total: "80 Properties",
    },
    {
      cover: "../images/hero/h6.png",
      name: "Villa & Condo",
      total: "80 Properties",
    },
  ]
  export const list = [
    {
      id: 1,
      cover: "../images/list/p-1.png",
      name: "200 Sq-ft",
      location: "Civil lines, Delhi",
      category: "For Rent",
      price: "₹50",
      type: "Apartment",
    },
    {
      id: 2,
      cover: "../images/list/p-2.png",
      name: "East Facing Plot",
      location: "Cannaught Place, Delhi",
      category: "For Sale",
      price: "₹4,594",
      type: "Plot",
    },
    {
      id: 3,
      cover: "../images/list/p-7.png",
      name: "East Facing",
      location: "Laxmi Nagar, Delhi",
      category: "For Rent",
      price: "₹53",
      type: "Offices",
    },
    {
      id: 4,
      cover: "../images/list/p-4.png",
      name: "5 BHK",
      location: "Hauz Khas, Delhi",
      category: "For Sale",
      price: "₹20,444",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover: "../images/list/p-5.png",
      name: "Shop 120 Sq-ft",
      location: "Green Park, Delhi",
      category: "For Rent",
      price: "₹33",
      type: "Commercial",
    },
    {
      id: 6,
      cover: "../images/list/p-6.png",
      name: "2 BHK Builder Floor",
      location: "Harunagla, Bareilly",
      category: "For Sale",
      price: "₹4,561",
      type: "Apartment",
    },
  ]
  export const awards = [
    {
      icon: <FontAwesomeIcon icon={faTrophy}/>,
      num: "32 M	",
      name: "Blue Burmin Award",
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase}/>,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: <FontAwesomeIcon icon={faLightbulb}/>,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: <FontAwesomeIcon icon={faHeart}/>,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ]
  export const location = [
    {
      id: 1,
      name: "Civil Lines, Delhi",
      Villas: "12 Villas,",
      Apartments: " 10 Apartments",
      Offices: " 07 Offices,",
      cover: "./images/location/city-1.png",
    },
    {
      id: 2,
      name: "Green Park, Delhi",
      Villas: "12 Villas,",
      Apartments: " 10 Apartments",
      Offices: " 07 Offices,",
      cover: "./images/location/city-2.png",
    },
    {
      id: 3,
      name: "Laxmi Nagar, Delhi",
      Villas: "12 Villas,",
      Apartments: " 10 Apartments",
      Offices: " 07 Offices,",
      cover: "./images/location/city-3.png",
    },
    {
      id: 4,
      name: " Hauz Khas, Delhi",
      Villas: "12 Villas,",
      Apartments: " 10 Apartments",
      Offices: " 07 Offices,",
      cover: "./images/location/city-4.png",
    },
    {
      id: 5,
      name: "Nainital Road, Bareilly",
      Villas: "12 Villasx,",
      Apartments: " 10 Apartments",
      Offices: " 07 Offices,",
      cover: "./images/location/city-5.png",
    },
    {
      id: 6,
      name: "Cannaught Place, Delhi",
      Villas: "12 Villas,",
      Apartments: " 10 Apartments",
      Offices: " 07 Offices,",
      cover: "./images/location/city-6.png",
    },
  ]
  export const team = [
    {
      list: "50",
      cover: "../images/customer/team-1.jpg",
      address: "Pilibhit Bypass, Bareilly",
      name: "Sargam S. Singh",
      icon: [<FontAwesomeIcon icon={faFacebookF}/>, <FontAwesomeIcon icon={faLinkedin}/>, <FontAwesomeIcon icon={faTwitter}/>, <FontAwesomeIcon icon={faInstagram}/>],
    },
    {
      list: "70",
      cover: "../images/customer/team-2.jpg",
      address: "Ganj, Aonla",
      name: "Khushi Kumari",
      icon: [<FontAwesomeIcon icon={faFacebookF}/>, <FontAwesomeIcon icon={faLinkedin}/>, <FontAwesomeIcon icon={faTwitter}/>, <FontAwesomeIcon icon={faInstagram}/>],
    },
    {
      list: "80",
      cover: "../images/customer/team-3.jpg",
      address: "Izzat Nagar, Bareilly.",
      name: "Sanjay Singh",
      icon: [<FontAwesomeIcon icon={faFacebookF}/>, <FontAwesomeIcon icon={faLinkedin}/>, <FontAwesomeIcon icon={faTwitter}/>, <FontAwesomeIcon icon={faInstagram}/>],
    },
    {
      list: "51",
      cover: "../images/customer/team-4.jpg",
      address: " Civil Lines, Bareilly",
      name: "Abdul Khan",
      icon: [<FontAwesomeIcon icon={faFacebookF}/>, <FontAwesomeIcon icon={faLinkedin}/>, <FontAwesomeIcon icon={faTwitter}/>, <FontAwesomeIcon icon={faInstagram}/>],
    },
    {
      list: "42",
      cover: "../images/customer/team-5.jpg",
      address: " Green park, Bareilly",
      name: "Anuj Panday",
      icon: [<FontAwesomeIcon icon={faFacebookF}/>, <FontAwesomeIcon icon={faLinkedin}/>, <FontAwesomeIcon icon={faTwitter}/>, <FontAwesomeIcon icon={faInstagram}/>],
    },
    {
      list: "38",
      cover: "../images/customer/team-5.jpg",
      address: "Quila, Bareilly",
      name: "Sachin Kumar",
      icon: [<FontAwesomeIcon icon={faFacebookF}/>, <FontAwesomeIcon icon={faLinkedin}/>, <FontAwesomeIcon icon={faTwitter}/>, <FontAwesomeIcon icon={faInstagram}/>],
    },
  ]
  export const price = [
    {
      plan: "Basic",
      price: "2500",
      ptext: "per user, per month",
      list: [
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "120GB CDN Bandwidth",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "5GB Cloud Storage",
        },
        { change: "color", icon: <FontAwesomeIcon icon={faX}/>, text: "Personal Help Support" },
        { change: "color", icon: <FontAwesomeIcon icon={faX}/>, text: "Enterprise SLA" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "5000",
      ptext: "per user, per month",
      list: [
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "150GB CDN Bandwidth",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "10GB Cloud Storage",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <FontAwesomeIcon icon={faX}/>,
          text: "Enterprise SLA",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "7000",
      ptext: "2 user, per month",
      list: [
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "100% Uptime Guarantee",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "200GB CDN Bandwidth",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "20GB Cloud Storage",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "Personal Help Support",
        },
        {
          icon: <FontAwesomeIcon icon={faCheck}/>,
          text: "Enterprise SLA",
        },
      ],
    },
  ]
  export const footer = [
    {
      title: "LAYOUTS",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "ALL SECTIONS",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
      title: "COMPANY",
      text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
  ]
