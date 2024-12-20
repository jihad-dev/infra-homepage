// import React from "react";
// import logo from "../src/assets/infra-logo.jpg";

// const Header: React.FC = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
//       {/* Logo on the left side */}
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-12 lg:ml-10 w-auto" />
//         {/* Adjust the `h-10` to your desired height */}
//       </div>
//         <div>
//             <marquee>
//             ভর্তি চলিতেছে, ভর্তি চলিতেছে, !!! ইনফ্রা পলিটেকনিক ইন্সটিটিউট, কাশিপুর, বরিশালে, ৪ বছর মেয়াদী ডিপ্লোমা ইন-ইঞ্জিনিয়ারিং শিক্ষাক্রমে ২০২৪-২০২৫ সেশনে ১২টি টেকনোলজিতে ভর্তি চলিতেছে।।।
//             </marquee>
//         </div>
//       {/* Login Button on the right side */}
//       <button
//         className="px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//         onClick={() => alert("Login button clicked!")}
//       >
//         Login
//       </button>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import logo from "../src/assets/infra-logo.jpg";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo on the left side */}
      <div className="flex items-center">
        <img src={logo} alt="Infra Polytechnic Institute Logo" className="h-12 w-full lg:ml-10 w-auto" />
      </div>

      {/* Scrolling Announcement */}
      <div className="overflow-hidden whitespace-nowrap w-full mx-4">
        <div className="scrolling-text text-blue-600 font-semibold text-center">
          ভর্তি চলিতেছে, ভর্তি চলিতেছে, !!! ইনফ্রা পলিটেকনিক ইন্সটিটিউট, কাশিপুর, বরিশালে, ৪ বছর মেয়াদী ডিপ্লোমা ইন-ইঞ্জিনিয়ারিং শিক্ষাক্রমে ২০২৪-২০২৫ সেশনে ১২টি টেকনোলজিতে  ভর্তি চলিতেছে।।।
        </div>
      </div>

      {/* Login Button on the right side */}
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => alert("Login button clicked!")}
        aria-label="Login"
      >
        Login
      </button>
    </header>
  );
};

export default Header;
