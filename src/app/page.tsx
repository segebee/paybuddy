import React from "react";
import Image from "next/image";
import Link from "next/link";

import { benefitOne, benefitTwo } from "./utils";

const Navbar = () => {
  const navigation = ["About", "Company", "Blog", "Built on Base"];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
              <span>
                <Image
                  src="/logo.png"
                  alt="PayBuddy"
                  width="250"
                  height="80"
                  className=""
                />
              </span>
            </span>
          </Link>
        </div>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-900 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdl1MlsXCAyYVwat5aWel-qGvWnqdoRz_xhpkf4fSQEwylv9w/viewform"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

const Container = (props: any) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

const SectionTitle = (props: any) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
          {props.children}
        </p>
      )}
    </Container>
  );
};

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Banking for a Decentralized World
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              PayBuddy is built for African web3 professionals who earn in fiat
              or crypto, and want to access banking services such as currency
              swaps, cards, credit, private banking, etc.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdl1MlsXCAyYVwat5aWel-qGvWnqdoRz_xhpkf4fSQEwylv9w/viewform"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/hero.png"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      {/* <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700">
            Trusted by <span className="text-indigo-600">2000+</span> customers
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container> */}
    </>
  );
};

function AmazonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="33"
      fill="none"
      viewBox="0 0 110 33"
    >
      <g fill="currentColor" clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          d="M67.776 25.783c-6.323 4.676-15.521 7.167-23.455 7.167-11.114 0-21.079-4.1-28.667-10.923-.575-.536-.077-1.264.651-.843 8.163 4.752 18.243 7.589 28.668 7.589 7.013 0 14.755-1.457 21.884-4.485 1.073-.421 1.954.729.92 1.495z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M70.42 22.756c-.804-1.035-5.365-.499-7.396-.23-.613.076-.728-.46-.153-.844 3.64-2.567 9.581-1.8 10.271-.958.69.843-.192 6.822-3.603 9.658-.536.422-1.034.192-.804-.383.766-1.916 2.49-6.17 1.686-7.243z"
          clipRule="evenodd"
        ></path>
        <path d="M63.139 3.67V1.177c0-.383.268-.613.613-.613h11.115c.345 0 .651.268.651.613v2.108c0 .345-.306.805-.843 1.571l-5.749 8.202c2.146-.038 4.408.268 6.324 1.341.421.23.536.614.575.959v2.644c0 .383-.383.805-.805.575-3.411-1.801-7.972-1.993-11.728.038-.383.192-.805-.191-.805-.575v-2.529c0-.383 0-1.073.422-1.686l6.669-9.543H63.79c-.344 0-.651-.269-.651-.614zm-40.51 15.445h-3.373c-.306-.039-.575-.269-.613-.575V1.217c0-.345.307-.614.652-.614h3.142c.345 0 .575.269.613.575V3.44h.077C23.932 1.255 25.503.22 27.573.22c2.108 0 3.45 1.035 4.369 3.22.805-2.185 2.683-3.22 4.676-3.22 1.418 0 2.95.575 3.909 1.916 1.073 1.457.843 3.565.843 5.443v10.96c0 .346-.306.614-.651.614h-3.335c-.345-.038-.613-.307-.613-.613V9.342c0-.729.077-2.568-.077-3.258-.268-1.15-.996-1.495-1.992-1.495-.805 0-1.687.537-2.032 1.418-.345.882-.306 2.338-.306 3.335v9.198c0 .345-.307.613-.652.613H28.34c-.345-.038-.613-.307-.613-.613V9.342c0-1.917.307-4.791-2.07-4.791-2.414 0-2.337 2.76-2.337 4.79v9.199c-.038.306-.307.575-.69.575zM85.099.22c5.021 0 7.742 4.293 7.742 9.773 0 5.289-2.99 9.505-7.741 9.505-4.906 0-7.589-4.293-7.589-9.658C77.473 4.436 80.194.22 85.1.22zm0 3.564c-2.49 0-2.644 3.411-2.644 5.52 0 2.107-.038 6.63 2.606 6.63 2.606 0 2.76-3.641 2.76-5.864 0-1.457-.077-3.22-.499-4.6-.383-1.226-1.15-1.686-2.222-1.686zm14.22 15.33h-3.373c-.345-.038-.614-.306-.614-.613V1.14a.662.662 0 01.652-.575h3.143c.306 0 .536.23.613.498v2.645h.077c.958-2.376 2.261-3.488 4.599-3.488 1.494 0 2.989.537 3.947 2.031.882 1.38.882 3.718.882 5.404v10.923c-.039.307-.307.537-.652.537h-3.373c-.306-.039-.574-.269-.613-.537V9.15c0-1.916.23-4.676-2.108-4.676-.804 0-1.571.537-1.954 1.38-.46 1.073-.537 2.108-.537 3.296V18.5a.702.702 0 01-.69.614zm-41.622-.038a.693.693 0 01-.805.077c-1.111-.92-1.341-1.38-1.955-2.261-1.84 1.878-3.18 2.453-5.557 2.453-2.836 0-5.059-1.764-5.059-5.251 0-2.76 1.495-4.6 3.603-5.519 1.84-.805 4.407-.958 6.362-1.188v-.422c0-.804.076-1.763-.422-2.452-.421-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.72 2.031-.078.307-.27.614-.576.614l-3.257-.345c-.269-.077-.575-.269-.499-.69.767-3.986 4.331-5.174 7.55-5.174 1.648 0 3.795.421 5.098 1.686 1.648 1.533 1.495 3.603 1.495 5.826v5.25c0 1.571.651 2.261 1.264 3.143.23.307.268.69 0 .881-.728.575-1.954 1.648-2.644 2.223zm-3.411-8.24v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603zm-41.698 8.317c-1.112-.92-1.342-1.38-1.955-2.261-1.84 1.878-3.181 2.453-5.557 2.453-2.836 0-5.06-1.764-5.06-5.251 0-2.76 1.496-4.6 3.603-5.519 1.84-.805 4.408-.958 6.362-1.188v-.422c0-.804.077-1.763-.421-2.452-.422-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.721 2.031-.077.307-.268.614-.575.614L1.128 5.93C.86 5.854.553 5.662.63 5.24 1.397 1.255 4.96.067 8.18.067c1.648 0 3.794.421 5.098 1.686 1.647 1.533 1.494 3.603 1.494 5.826v5.25c0 1.571.652 2.261 1.265 3.143.23.307.268.69 0 .881-.728.575-1.955 1.648-2.644 2.223a.693.693 0 01-.805.077zm-2.568-8.317v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H109.272V33H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="31"
      fill="none"
      viewBox="0 0 150 31"
    >
      <path
        fill="currentColor"
        d="M150 14.514v-2.647h-3.295V7.75l-.11.034-3.095.945-.061.019v3.118h-4.884V10.13c0-.81.181-1.428.538-1.841.355-.408.863-.615 1.51-.615.465 0 .947.11 1.431.325l.122.054V5.265l-.057-.021c-.452-.162-1.068-.244-1.83-.244-.96 0-1.834.209-2.596.622a4.428 4.428 0 00-1.78 1.757c-.419.751-.631 1.618-.631 2.578v1.91h-2.294v2.647h2.294v11.153h3.293V14.514h4.884v7.088c0 2.919 1.38 4.398 4.1 4.398a6.78 6.78 0 001.4-.155c.488-.105.822-.21 1.018-.322l.043-.026v-2.672l-.134.089c-.204.13-.428.227-.662.288a2.514 2.514 0 01-.65.11c-.638 0-1.11-.171-1.402-.51-.296-.34-.446-.938-.446-1.773v-6.515H150zm-24.387 8.799c-1.195 0-2.137-.396-2.801-1.175-.669-.783-1.007-1.9-1.007-3.317 0-1.464.338-2.61 1.007-3.406.664-.791 1.598-1.193 2.775-1.193 1.142 0 2.05.383 2.702 1.14.654.762.986 1.898.986 3.379 0 1.498-.312 2.65-.928 3.42-.612.764-1.531 1.152-2.734 1.152zm.147-11.779c-2.28 0-4.092.667-5.383 1.982-1.291 1.315-1.945 3.136-1.945 5.41 0 2.161.638 3.9 1.898 5.165 1.26 1.267 2.975 1.908 5.096 1.908 2.21 0 3.986-.676 5.277-2.009 1.29-1.332 1.945-3.135 1.945-5.356 0-2.195-.614-3.946-1.825-5.204-1.211-1.258-2.915-1.896-5.063-1.896zm-12.638 0c-1.551 0-2.834.396-3.815 1.177-.986.785-1.486 1.815-1.486 3.062 0 .647.108 1.223.32 1.711.214.49.545.921.985 1.283.436.359 1.11.735 2.001 1.117.75.308 1.31.569 1.665.774.347.201.594.404.733.6.135.193.204.457.204.783 0 .927-.696 1.378-2.128 1.378-.53 0-1.136-.11-1.8-.329a6.76 6.76 0 01-1.844-.932l-.136-.098v3.164l.05.023c.466.215 1.053.396 1.746.538a9.428 9.428 0 001.864.215c1.684 0 3.04-.398 4.028-1.183.996-.79 1.5-1.845 1.5-3.135 0-.93-.271-1.728-.807-2.37-.531-.639-1.454-1.225-2.74-1.743-1.026-.41-1.683-.751-1.954-1.013-.261-.253-.394-.61-.394-1.063 0-.401.164-.723.5-.983.339-.262.81-.395 1.401-.395.55 0 1.11.087 1.669.256.517.15 1.008.378 1.457.674l.134.092v-3.001l-.051-.022c-.378-.162-.875-.3-1.48-.412a9.053 9.053 0 00-1.622-.168zM99.236 23.313c-1.195 0-2.138-.396-2.802-1.175-.668-.783-1.006-1.899-1.006-3.317 0-1.464.338-2.61 1.007-3.406.664-.791 1.597-1.193 2.774-1.193 1.142 0 2.05.383 2.702 1.14.655.762.987 1.898.987 3.379 0 1.498-.313 2.65-.929 3.42-.611.764-1.53 1.152-2.733 1.152zm.147-11.779c-2.281 0-4.093.667-5.384 1.982-1.29 1.315-1.945 3.136-1.945 5.41 0 2.162.64 3.9 1.9 5.165C95.213 25.358 96.927 26 99.048 26c2.21 0 3.986-.676 5.277-2.009 1.29-1.332 1.945-3.135 1.945-5.356 0-2.195-.614-3.946-1.825-5.204-1.212-1.258-2.916-1.896-5.063-1.896l.001-.001zm-12.328 2.723v-2.39h-3.253v13.8h3.253v-7.06c0-1.2.273-2.186.811-2.93.531-.737 1.24-1.11 2.104-1.11.293 0 .622.049.978.144.353.095.608.198.759.306l.136.099v-3.273l-.052-.022c-.303-.129-.732-.194-1.274-.194-.818 0-1.55.263-2.176.779-.55.453-.947 1.075-1.251 1.85h-.035v.001zm-9.079-2.723c-1.492 0-2.823.32-3.955.95a6.4 6.4 0 00-2.61 2.676c-.594 1.143-.896 2.478-.896 3.966 0 1.304.293 2.5.871 3.555a6.114 6.114 0 002.435 2.456c1.035.573 2.231.863 3.556.863 1.546 0 2.866-.309 3.924-.917l.043-.024v-2.974l-.137.1a6.12 6.12 0 01-1.591.826c-.575.2-1.1.302-1.56.302-1.276 0-2.3-.399-3.044-1.185-.746-.786-1.123-1.891-1.123-3.281 0-1.4.394-2.533 1.17-3.369.775-.833 1.802-1.256 3.052-1.256 1.069 0 2.11.361 3.096 1.075l.137.098v-3.133l-.044-.025c-.371-.207-.877-.378-1.505-.508a9.005 9.005 0 00-1.819-.195zm-9.701.333h-3.253v13.8h3.253v-13.8zm-1.593-5.879c-.536 0-1.003.182-1.386.542a1.786 1.786 0 00-.581 1.354c0 .529.193.975.575 1.327.379.351.847.529 1.392.529a2.01 2.01 0 001.398-.528 1.729 1.729 0 00.582-1.328c0-.518-.19-.969-.566-1.339-.375-.37-.851-.557-1.414-.557zm-8.117 4.86v14.819h3.32V6.41H57.29l-5.84 14.302L45.782 6.41H41v19.256h3.12v-14.82h.107l5.985 14.82h2.354l5.892-14.818h.107z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 14H0V0h15v14zm17 0H17V0h15v14zM15 31H0V17h15v14zm17 0H17V17h15v14z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function NetflixLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="29"
      fill="none"
      viewBox="0 0 108 29"
    >
      <g>
        <path
          fill="currentColor"
          d="M14.714 27.096c-1.61.283-3.248.367-4.942.593L4.603 12.551V28.34c-1.61.17-3.078.395-4.603.621V.04h4.293l5.874 16.409V.039h4.547v27.057zm8.897-16.465c1.75 0 4.434-.085 6.044-.085v4.519c-2.006 0-4.35 0-6.044.085v6.721c2.655-.17 5.31-.395 7.992-.48v4.35l-12.511.988V.039h12.511v4.52h-7.992v6.072zm24.797-6.072h-4.689v20.786c-1.525 0-3.05 0-4.518.056V4.56h-4.688V.039h13.895v4.52zm7.343 5.761h6.185v4.519H55.75V25.09h-4.435V.04h12.625v4.519h-8.19v5.761zm15.533 10.817c2.57.056 5.168.254 7.682.395v4.463c-4.038-.255-8.077-.509-12.2-.594V.04h4.518v21.097zm11.495 5.168c1.44.085 2.965.17 4.434.34V.04h-4.434v26.265zM107.01.04l-5.733 13.754 5.733 15.166c-1.695-.226-3.389-.537-5.084-.819l-3.248-8.36-3.304 7.683c-1.638-.283-3.22-.368-4.857-.594l5.818-13.246L91.082.04h4.858l2.965 7.597L102.07.04h4.942z"
        ></path>
      </g>
    </svg>
  );
}

function SonyLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="136"
      height="24"
      viewBox="0 0 351 61"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="currentColor" fillRule="nonzero">
          <path d="M345.559 49.001a5.448 5.448 0 00-4.81 2.72 5.538 5.538 0 000 5.559 5.448 5.448 0 004.81 2.719 5.425 5.425 0 003.855-1.618A5.513 5.513 0 00351 54.487c0-1.454-.573-2.85-1.593-3.879a5.42 5.42 0 00-3.848-1.607zm0 10.337a4.774 4.774 0 01-3.4-1.42 4.85 4.85 0 01-1.399-3.43c0-1.282.507-2.51 1.407-3.415a4.768 4.768 0 013.392-1.409c1.269 0 2.485.509 3.383 1.413a4.84 4.84 0 011.4 3.41 4.847 4.847 0 01-1.393 3.427 4.77 4.77 0 01-3.39 1.424z"></path>
          <path d="M348.163 53.183c0-.503-.223-1.032-.67-1.285-.45-.265-.952-.291-1.456-.291h-2.604v5.958h.729v-2.748h1.344l1.706 2.748h.868l-1.805-2.748c1.065-.03 1.888-.462 1.888-1.634zm-2.882 1.06h-1.121v-2.107h1.706c.742 0 1.556.112 1.556 1.034.002 1.213-1.303 1.073-2.14 1.073zm-31.199-29.868l10.93-11.639c.634-.854.95-1.453.95-1.965 0-.854-.738-1.196-3.055-1.196h-2.758V2.227H350v7.348h-3.922c-4.53 0-5.371.682-11.691 8.628l-17.292 18.622V48.19c0 2.907 1.472 3.93 5.686 3.93h6.529v7.09H287.5v-7.09h6.527c4.211 0 5.687-1.023 5.687-3.93V36.825l-20.366-22.468c-3.366-3.928-2.9-4.782-12.271-4.782V2.227h37.811v7.348h-2.692c-2.74 0-3.9.512-3.9 1.536 0 .857.842 1.54 1.369 2.222l10.304 11.199c1.224 1.27 2.718 1.434 4.113-.157zM60.388 2.225h9.12v20.503h-8.423c-.746-4.099-3.318-5.693-5.664-7.844-4.231-3.877-13.395-7.106-21.102-7.106-9.948 0-18.344 3.077-18.344 7.602 0 12.56 56.892 2.565 56.892 26.314C72.867 54.08 60.68 61 38.796 61c-7.577 0-19.041-2.345-25.805-5.927-2.12-1.22-3.02 1.156-3.418 4.134H.22V38.02h8.46c1.865 5.383 4.435 6.491 6.8 8.628 4.101 3.76 13.865 6.496 22.82 6.408 13.5-.133 18.142-3.076 18.142-7.348 0-4.27-4.591-5.297-19.385-7.602l-12.562-2.051C10.321 33.918 0 30.758 0 19.482 0 7.778 13.056.43 33.7.43c8.699 0 15.977 1.16 22.963 5.097 1.934 1.254 3.75 1.404 3.725-3.302zM238.39 36.552l.18-22.787c0-2.99-1.56-4.015-6.016-4.015h-5.236V2.66h33.315v7.09h-4.342c-4.46 0-6.02 1.027-6.02 4.015V59.64l-13.04-.103-42.228-39.878v28.96c0 2.906 1.56 4.015 6.017 4.015h5.797v7.006h-34.6v-7.006h5.733c4.456 0 6.016-1.11 6.016-4.014V13.765c0-2.99-1.56-4.015-6.016-4.015h-5.733V2.66h29.914l36.26 33.892zM126.796 0c-26.551 0-43.172 11.706-43.172 30.498 0 18.456 16.39 30.072 42.362 30.072 27.586 0 43.632-11.446 43.632-31.01C169.62 11.962 152.304 0 126.796 0zm-.604 53.14c-14.697 0-23.145-8.459-23.145-23.068 0-14.266 8.816-22.724 23.88-22.724 14.451 0 22.899 8.63 22.899 23.324 0 14.352-8.572 22.468-23.634 22.468z"></path>
        </g>
      </g>
    </svg>
  );
}

function VerizonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="138"
      height="31"
      viewBox="0 0 658 146"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <path
            fill="currentColor"
            d="M642.7 0L606.8 76.8 593.3 47.7 578.7 47.7 600.9 95.3 612.7 95.3 657.2 0z"
          ></path>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M488.7 142.6h28.9V89.7c0-12.1 7-20.6 17.4-20.6 10 0 15.2 7 15.2 17.1v56.4h28.9V80.7c0-21-12.6-35.8-33-35.8-13 0-22.1 5.6-28.9 15.8h-.6v-13h-28l.1 94.9zm-56.8-97.5c-30.2 0-50.4 21.7-50.4 50.3 0 28.4 20.2 50.3 50.4 50.3s50.4-21.9 50.4-50.3c.1-28.6-20.2-50.3-50.4-50.3zm-.2 79.2c-13.7 0-21-11.5-21-28.9 0-17.6 7.2-28.9 21-28.9 13.7 0 21.3 11.3 21.3 28.9.1 17.4-7.5 28.9-21.3 28.9zm-132.6 18.3h81.2v-22.8h-46v-.6l44-49.3V47.6h-79.2v22.9h44.5v.6l-44.5 49.7v21.8zm-37.1 0h29.1V47.7H262v94.9zm-67.5 0h29V99c0-19.8 11.9-28.6 30-26.1h.6v-25c-1.5-.6-3.2-.7-5.9-.7-11.3 0-18.9 5.2-25.4 16.3h-.6V47.7h-27.7v94.9zm-53.2-18.2c-12.8 0-20.6-8.3-22.1-21.1h68.4c.2-20.4-5.2-36.7-16.5-46.9-8-7.4-18.5-11.5-31.9-11.5-28.6 0-48.4 21.7-48.4 50.1 0 28.6 18.9 50.4 50.3 50.4 11.9 0 21.3-3.2 29.1-8.5 8.3-5.7 14.3-14.1 15.9-22.4h-27.8c-2.7 6.2-8.5 9.9-17 9.9zm-1.5-58.8c10.2 0 17.2 7.6 18.4 18.7h-38.8c2.3-11.2 8.4-18.7 20.4-18.7zM33 142.6h30.4l33-94.9H67.3l-18.5 61h-.4l-18.5-61H0l33 94.9zM262 13.9h29.1v25.8H262V13.9z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

const Benefits = (props: any) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data.image}
              width="521"
              height="400"
              alt="Benefits"
              className={"object-cover"}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props: any) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 ">{props.title}</h4>
          <p className="mt-1 text-gray-500 ">{props.children}</p>
        </div>
      </div>
    </>
  );
}

// const Video = () => {
//   const [playVideo, setPlayVideo] = useState(false);
//   return (
//     <Container>
//       <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
//         <div
//           onClick={() => setPlayVideo(!playVideo)}
//           className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700"
//         >
//           {!playVideo && (
//             <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-16 h-16  lg:w-28 lg:h-28"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="sr-only">Play Video</span>
//             </button>
//           )}
//           {playVideo && (
//             <iframe
//               src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
//               title="YouTube video player"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             />
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// };

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to enjoy world class banking?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Join the waitlist to know when we launch.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdl1MlsXCAyYVwat5aWel-qGvWnqdoRz_xhpkf4fSQEwylv9w/viewform"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </Container>
  );
};

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 "
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width="250"
                  height="80"
                  className=""
                />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 ">
              PayBuddy is all you need to earn, play and live in a decentralized
              world.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 ">
              <a href="#" target="_blank" rel="noopener">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a href="#" target="_blank" rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a href="#" target="_blank" rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="#" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 ">
          Copyright © {new Date().getFullYear()}.
        </div>
      </Container>
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col px-10">
      <Navbar />

      <Hero />

      {/* https://app-tailwind.preview.uideck.com/ */}

      {/* <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      <Cta />
      <Footer />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      
      
      <PopupWidget /> */}
    </main>
  );
}
