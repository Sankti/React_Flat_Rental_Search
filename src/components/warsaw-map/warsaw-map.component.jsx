import React from "react";

import "./warsaw-map.styles.scss";

function WarsawMap(props) {
  return (
    <svg
      className="warsaw-map"
      xmlns="http://www.w3.org/2000/svg"
      width="990"
      height="1050"
      version="1"
      viewBox="0 0 1000 1050"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        fillOpacity="1"
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="3"
        display="inline"
        transform="translate(-52.372 -18.034)"
      >
        <path
          className={"district " + props.state.bialoleka.toString()}
          id="bialoleka"
          onClick={props.pathClick}
          d="M598.676 258.467l-41.125.351-7.343 1.536c-1.053-5.66-3.83-3.168-3.47.91-7.81 3.241-16.716 7.892-21.173 8.827-4.469.937-43.055 16.684-43.055 16.684-2.967-3.373-5.779-.888-6.032 2.446-3.965 2.17-7.693 3.81-11.049 4.61-5.232.764-8.262-.577-7 4.326-3.242 2.565-7.046 4.23-11.046 5.582-1.678-1.857-3.584-3.54-5.41-3.015-1.87-4.895-6.72-6.858-6.262 1.877-.403 2.562-1.839 5.124 0 7.686-2.68.834-3.604 3.453-7.976 4.64-3.055.829-4.926 3.535-7.984 4.596-2.035-.183-4.932-.086-6.242.849-1.244.888-2.522.77-3.025-.297-6.196-13.144-8.915-1.803-8.933 1.03.08 2.797.925 5.445-2.845 7.799-2.195 1.937.458 2.128.452 3.588-1.347 1.078-2.575 1.996-3.967 2.813-12.315-14.296-27.534-23.036-39.687-25.66-21.453-4.649-34.743-11.247-49.586-25.737-7.802-8.682-9.042-17.898-13.619-24.554-9.49-13.803-18.172-19.984-22.86-22-25.28-10.905-38.814-34.753-38.814-60.116l1.468-37.668c-.895-11-5.392-18.09-9.742-25.034-7.775-8.812-13.997-18.012-20.622-27.112l24.22-15.57 2.65-9.406 6.464-.236 5.49 2.635 3.852 3.434 6.752-6.473 9.6 5.797c1.753.278 2.886.01 2.04-2.004l-8.45-17.35 9.967 5.682 9.37-18.24 2.99 2.193.299-2.193 17.642.1 2.492-5.184 29.405-.897 11.363 33.79 18.34.2c2.65-2.058 5.998-4.115 13.66-6.173 5.281-1.708 12.07-5.075 14.178-6.314 1.055-.62 2.908-1.026 3.78-.723 2.543 1.332.195 2.973 9.05 3.043 1.919-2.061 4.063-3.645 6.997-5.561 5.075-.305 9.515-1.187 14.532-2.314 3.05 6.677 6.254 13.4 4.931 21.132l2.545 6.08 18.839 1.595L453 71.975l1.694 1.495 4.549-3.248c1.632-4.563 3.1-14.618 3.824-22.468l5.88-5.383 7.078 11.363 24.62-3.19 7.761-5.211 8.367.214 1.93 2.79.215 5.362 10.941-4.29 16.948 1.287.214-12.014 8.581-.214 20.81-5.578c.825 1.117 7.026 24.681 7.937 28.747l-1.989 2.145 5.636 19.737 7.591.041 9.01 39.39-11.667.9c2.058 6.844 3.209 14.256 4.043 21.865l6.75.016.28 11.312 3.191 6.316c2.424-.004 1.338 2.367 1.463 3.23l-3.285.38 7.938 30.892-27.517 7.435c5.6 17.475 9.418 35.543 12.883 53.17z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.bielany.toString()}
          id="bielany"
          onClick={props.pathClick}
          d="M230.501 176.43c.329 28.149 13.658 50.019 38.938 60.923 4.688 2.017 13.37 8.198 22.86 22 4.577 6.657 5.817 15.873 13.619 24.555 14.843 14.49 28.133 21.088 49.586 25.736 12.475 2.695 27.015 11 39.649 25.848-3.41 2.46-6.41 4.3-10.614 7.697-5.189 4.192-7.589-5.636-12.092-1.638-1.589 1.231-1.993 2.01-.81 4.415.516 4.44-1.517 5.89-3.522 7.537l-39.099 32.791c-6.949-.322-8.315 3.608-8.938 8.256-2.773 4.04-5.256 8.037-9.035 12.22-3.086 2.696-5.426 5.752-6.385 9.663-1.944 2.98-4.19 6.049-6.466 8.728-1.642 1.931-3.965 3.843-4.776 6.009l-21.296-8.78-6.273-7.393-50.856-16.354-14.786-6.722-36.966-15.01-6.05-.896-10.305-12.322-8.065-.448-1.568 3.36-8.646-.295c-4.852-2.75-8.937-2.587-12.863-3.152l2.17-61.123-1.929-10.006s9.457-35.741 9.886-39.06c.474-3.67-6.977-13.735-10.893-18.852-.47-.614.884-2.111 2.333-1.522 8.525 4.284 20.184 4.906 30.38 4.822 2.036-8.871 1.821-16.646 14.3-31.046 9.016-1.145 17.77-2.901 25.868-6.19l1.14 4.386 4.148-1.802 3.538-5.599 6.474 8.839 20.384-7.506 1.085-11.027z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.bemowo.toString()}
          id="bemowo"
          onClick={props.pathClick}
          d="M293.143 431.17c-.905 5.31-2.981 10.178-6.885 14.336-4.731 5.04-4.77 8.244-3.416 11.387-1.076 3.796-4.527 8-6.833 11.444l-8.768 8.084c-4.333-.695-6.9 3.971-9.394 5.467 0 0-25.332 20.164-26.365 25.12-4.077 19.553-6.617 30.174-9.844 45.82-1.53 7.389 1.138 13.949 1.138 13.949s4.14 9.344 5.182 15.43c1.252 7.323 1.018 9.681-3.191 13.833-2.942 2.9-7.953 6.047-11.955 5.773-6.509-.445-5.284 3.159-5.865 5.46l-1.823 7.329-69.173 13.949c-3.566 1.322-7.335 1.566-10.483 5.124h-3.345c-4.32-3.95-7.24-1.614-10.255-.055l-9.491.07.466-1.68 5.184-27.377 3.616-.241 1.809-30.14-5.546-2.53v-13.624c5.252-1.376 11.253-5.145 18.084-11.573l22.061-.241c5.499-20.164 11.928-40.78 7.354-56.06L87.17 477.567c12.424-18.273 23.546-36.87 34.72-55.456l6.507-55.842 8.854.337 1.568-3.36 8.065.448 10.306 12.322 6.049.896 36.966 15.01 14.786 6.722 50.856 16.354 6.273 7.393z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.ursus.toString()}
          id="ursus"
          onClick={props.pathClick}
          d="M126.095 633.556l45.656 29.496c-1.555 8.688 8.031 12.924 14.754 14.185 5.89 3.388 10.098 7.186 15.947 14.997 5.839 7.054 9.74 1.965 13.371.434l-9.354 28.354-9.504 2.114-2.268-1.855-2.474 2.062-.824 4.123-7.216.824-14.843.619-2.886 5.566-52.157.206c-1.882 1.48-3.28 1.029-4.535 0l-15.668.412-.206-30.923-24.41 10.632c.673-.134 1.395-15.14-.329-15.992-2.073.686-11.792-31.846-10.514-33.603.01-11.51 5.781-20.568 20.616-25.77l23.126-5.415 9.491-.402c3.015-1.559 5.934-3.896 10.255.055z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.wlochy.toString()}
          id="wlochy"
          onClick={props.pathClick}
          d="M205.124 614.602l-69.173 13.949c-3.566 1.322-7.157 1.387-10.027 4.826l45.827 29.675c-1.555 8.688 8.031 12.924 14.754 14.185 5.89 3.388 10.098 7.186 15.947 14.997 5.839 7.054 9.74 1.965 13.371.434l-9.506 28.958-8.734 23.981 12.576 4.33.412 3.092 3.711.618 1.65 2.268.205 23.09h4.948l9.07 14.43-2.68 3.917 14.432 7.834-.619 3.092c7.531 7.084 18.146 14.276 30.98 18.486 3.953 1.297 7.522 2.211 11.464 5.788l13.346 2.913.234 12.197c14.525 13.42 27.558 26.919 50.414 32.18 7.83 5.23 9.987 6.67 18.618 15.897l2.271-6.619c.168-1.284 3.765.089 11.713.271l-4.308-64.14c.567-4.528-1.806-6.284-1.185-10.654.044-7.461-.64-18.981-.453-20.866.653-6.56 1.098-12.812.058-17.557l-.608-62.314c-.568-9.14-4.453-15.28-10.754-17.698-25.01-9.88-50.02-19.767-75.236-28.409-4.235-1.575-8.509-3.217-11.18-6.205-2.673-2.987-5.575-5.65-9.281-12.409-3.688-6.726-7.199-11.723-9.072-14.139-1.903-2.455-1.664-9.12-.264-13.106-7.815 1.17-14.96 4.593-21.77 8.85-19.245-1.2-11.17-8.705-8.29-15.011h-9.41l-4.928-3.36h-8.065l.087.125z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.pragapn.toString()}
          id="pragapn"
          onClick={props.pathClick}
          d="M395.219 335.433l3.939-2.94c.007-1.46-2.647-1.652-.452-3.59 3.77-2.353 2.924-5.001 2.845-7.799.018-2.832 2.737-14.173 8.933-1.029.503 1.068 1.78 1.185 3.025.297 1.31-.935 4.207-1.032 6.242-.849 3.058-1.061 4.93-3.767 7.984-4.596 4.372-1.187 5.295-3.807 8.283-4.433 3.316 6.812 1.3 10.348 7.594 16.728 2.954 3 5.21 7.656 9.018 13.3l.214 21.881c8.433 12.547 6.484 37.103 25.958 36.04 5.252 5.233 10.766 10.316 19.95 13.301 26.388 12.893 52.587 21.986 78.544 32.85l-19.548 4.692-5.578 6.436-18.45 11.37-5.792 2.36c-19.597 11.668-24.871 13.652-21.881 35.397-3.264 6.842-8.802 12.027-15.22 16.836-5.959-8.508-13.262-15.957-21.357-23.174-8.905-6.928-15.87-14.8-21.024-24.324-6.317-11.98-12.108-21.716-17.293-30.44-9.013-15.161-15.178-35.2-15.476-52.693a89.683 89.683 0 00-20.458-55.621z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.srodmiescie.toString()}
          id="srodmiescie"
          onClick={props.pathClick}
          d="M360.699 442.165l12.5-.83.652.682 24.656 1.058c1.186-.704 2.636-.351 4.004-.325l2.273 1.732 6.818-.325c2.44-.797 4.496-1.71 6.277-2.705.562-1.025 1.763-1.412 3.247-1.516l6.224-3.359c1.318 2.889 2.181 4.442 3.803 7.17 5.185 8.724 10.976 18.46 17.293 30.44 5.154 9.525 12.119 17.396 21.024 24.324 8.095 7.217 15.083 14.94 21.465 23.253 4.718 6.146 13.74 20.28 21.012 36.162 3.02 6.595 13.076 30.58 41.535 38.415l-6.146 9.136-16.396 3.978.482 2.532-11.091 3.135-.964-2.532-6.028 1.326 1.808 8.439v3.134l-6.028 6.028-19.65.362-3.858 10.247-4.702-.361-8.077.361-8.319-9.644-2.532-7.836-5.666-6.149-1.687.603-1.568-1.447-5.907 1.567-.241 1.327-25.817 7.254-4.563-24.374-.362-22.664-15.673-38.699-5.786-23.63-30.758-57.837-2.523-9.888z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.targowek.toString()}
          id="targowek"
          onClick={props.pathClick}
          d="M656.107 386.364l-5.807.28-14.012-46.337h-8.605c-.735-2.932-1.395-5.864-1.072-8.796-7.372-8.94-12.534-18.414-17.353-26.427-2.821-4.69-3.752-10.165-5.576-15.27-1.448-4.05-3.256-7.603-4.53-11.505l4.933-1.717-5.206-17.962-41.328.188-7.343 1.536c-1.053-5.66-3.83-3.168-3.47.91-7.81 3.241-16.716 7.892-21.173 8.827-4.469.937-43.055 16.684-43.055 16.684-2.967-3.373-5.779-.888-6.032 2.446-3.965 2.17-7.693 3.81-11.049 4.61-5.232.764-8.262-.577-7 4.326-3.242 2.565-7.046 4.23-11.046 5.582-1.678-1.857-3.584-3.54-5.41-3.015-1.87-4.895-6.72-6.858-6.262 1.877-.403 2.562-2.025 5.634.4 7.8 3.316 6.812 1.207 10.44 7.5 16.821 2.955 3 5.211 7.656 9.019 13.3l.214 21.881c8.433 12.547 6.484 37.103 25.958 36.04 5.252 5.233 10.766 10.316 19.95 13.301 26.388 12.893 52.841 22.007 78.799 32.87l12.805-3.694 3.647.214 11.799-2.36 57.093 2.358-6.036-32.391h2.145v-7.938l1.93-1.501-4.075-12.014"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.zoliborz.toString()}
          id="zoliborz"
          onClick={props.pathClick}
          d="M427.186 436.69l-6.06 3.246c-1.484.104-2.685.49-3.247 1.516-1.78.995-3.836 1.908-6.277 2.705l-6.818.325-2.273-1.732c-1.368-.026-2.818-.379-4.004.325l-24.656-1.058-.652-.683-12.894.875-16.793 9.15-.414 1.007-6.277 3.37c-.778 1.682-1.866 1.504-2.922 1.516-3.8 1.078-5.65 2.806-7.792 4.437-2.473.691-3.212.082-4.653 0-.713-1.055-1.841-1.695-2.814-2.49-2.562.285-5.123-1.91-7.684-2.921-3.286-.04-5.948.545-7.792 1.948-2.597 1.696-3.66-.31-5.736-.325-4.773-.036-7.85-.529-10.93-2.814-1.898-1.635-2.827-.684-3.851.022-.557-2.411-1.12-4.562 3.611-9.603 3.904-4.158 6.042-9.208 6.947-14.518 1.022-1.984 3.345-3.896 4.987-5.827 2.275-2.68 4.522-5.749 6.466-8.728.96-3.91 3.3-6.967 6.385-9.662 3.779-4.184 6.262-8.182 9.035-12.221.623-4.648 1.99-8.578 8.938-8.256l39.1-32.79c2.004-1.648 4.037-3.099 3.52-7.538-1.182-2.405-.778-3.184.811-4.415 4.503-3.998 6.903 5.83 12.092 1.638 4.262-3.444 7.288-5.588 10.956-7.554 11.393 14.255 19.8 32.942 20.182 55.42.298 17.493 6.463 37.53 15.476 52.693"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.wola.toString()}
          id="wola"
          onClick={props.pathClick}
          d="M408.748 562.71l-8.25-20.646-5.787-23.63-30.758-57.837-2.523-9.888-.688-8.74-17.23 9.39-.414 1.007-6.277 3.37c-.778 1.682-1.866 1.504-2.922 1.516-3.8 1.078-5.65 2.806-7.792 4.437-2.473.691-3.212.082-4.653 0-.713-1.055-1.841-1.695-2.814-2.49-2.561.285-5.123-1.91-7.684-2.921-3.286-.04-5.948.545-7.792 1.948-2.597 1.696-3.66-.31-5.736-.325-4.773-.036-7.85-.529-10.93-2.814-1.898-1.635-2.827-.684-3.9-.094-.635.232-.169.941.244 1.9-1.076 3.796-4.527 8-6.833 11.444l-8.768 8.084c-4.333-.695-6.9 3.971-9.394 5.467 0 0-25.332 20.164-26.365 25.12-4.077 19.553-6.617 30.174-9.844 45.82-1.53 7.389 1.138 13.949 1.138 13.949s4.14 9.344 5.182 15.43c1.252 7.323 1.018 9.681-3.191 13.833-2.942 2.9-7.953 6.047-11.955 5.773-6.509-.445-5.278 3.16-5.865 5.46l-1.338 5.118 8.038-.019 4.929 3.36h9.41c-2.88 6.306-10.956 13.811 8.288 15.011 6.811-4.256 13.956-7.678 21.956-8.961 3.211-1.07 6.422-2.032 9.633-4.257 6.063-5.333 9.798-5.653 12.77-3.808h16.355c3.39-1.752 6.578-3.655 7.617-7.17 1.941-1.793 3.507-3.96 4.257-6.945l7.393-1.568 4.929-2.016 9.185-3.585 1.793 1.792c5.451-3.352 10.903-7.357 16.354-9.633 3.883-1.175 7.767-3.207 11.65-4.929l16.803-6.049c2.09-1.41 4.182-2.597 6.273-2.24z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.ochota.toString()}
          id="ochota"
          onClick={props.pathClick}
          d="M363.222 696.206l13.526-66.738 23.267 4.22 21.138-5.928-4.621-24.333-.362-22.664-7.26-18.016-25.668 8.627c-2.091-.357-4.182.83-6.273 2.24l-16.803 6.05c-3.883 1.721-7.767 3.753-11.65 4.928-5.451 2.276-10.903 6.28-16.354 9.633l-1.793-1.792-9.185 3.585-4.929 2.016-7.393 1.568c-.75 2.985-2.316 5.152-4.257 6.945-1.04 3.515-4.227 5.418-7.617 7.17h-16.355c-2.972-1.845-6.707-1.525-12.77 3.808-3.21 2.225-6.505 3.187-9.9 4.369-1.401 4.378-1.557 10.651.346 13.106 1.873 2.416 5.384 7.413 9.072 14.14 3.706 6.759 6.608 9.421 9.28 12.408 2.672 2.988 6.946 4.63 11.181 6.205 25.217 8.642 50.37 18.574 75.38 28.453z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.rembertow.toString()}
          id="rembertow"
          onClick={props.pathClick}
          d="M714.811 519.9l-4.415-3.005c-1.091-1.892-.604-2.975.111-4.323l2.24-3.33.103-7.182-40.116-49.127.23-11.373-10.098-.426-6.007-32.393h2.145v-7.938l1.93-1.501-4.395-13.031 95.784-18.793c4.26-.836 4.427-10.194 10.12-11.685 3.185-.852 3.995-3.57 5.112-6.047l13.044-5.29 8.632-18.778 10.074-4.25 7.293 8.367-1.727 40.23-1.705 6.751c8.023 9.215 21.112 27.971 24.073 27.63 3.225-.37 5.895 5.245 8.724 9.483l-.643 27.245c-2.332 4.18-3.471 9.272-10.858 10.563l25.164 3.485 1.316 22.153c-.81 2.915-1.906 1.552-3.007.111-.702-2.536-.322-4.207-2.34-7.797-1.647-.763-2.984.644-4.343 1.894l-.669 5.68-8.91 2.896c1.818 4.084 3.661 8.169 3.452 12.253l-17.71 4.232c-4.092 2.77-5.536 4.545-7.351 6.46l-20.495 6.238-2.896.446c-1.764-1.35-3.718-2.463-4.344-5.236-14.407 4.975-29.996 9.062-43.217 14.926l-3.23.111-5.347-14.814c-1.44-2.19-2.513-.709-3.675-.111-4.351 5.234-7.897 9.643-12.049 15.276z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.wesola.toString()}
          id="wesola"
          onClick={props.pathClick}
          d="M966.298 682.924l-2.859-.867-.536-3.213-52.215-.536c-1.049-8.992-1.614-17.343-.536-27.044l5.088-3.482c-3.072-4.815-6.665-13.272-9.104-13.656 1.085-4.106 1.679-8.212 1.339-12.317l-4.285-8.301-3.48-.268-12.854-23.296 2.143-.803c-1.084-7.39-.226-17.692 0-27.045 4.405-1.843 7.723-4.773 10.71-8.034l-9.372-11.514c-9.586-5.741-18.072-6.529-26.241-5.89-7.927-5.463-15.521-11.257-24.1-16.067-4.284-1.56-8.568-7.69-12.853-11.782l-9.952-12.127 17.934-4.31c.21-4.084-1.634-8.169-3.453-12.253l8.911-2.896.669-5.68c1.36-1.25 2.696-2.657 4.344-1.894 2.017 3.59 1.637 5.26 2.339 7.797 1.1 1.44 2.196 2.804 3.007-.111l-1.323-22.1 139.73-25.685 5.39 35.397 4.29-.215-1.931 28.961-36.684 2.36 3.003 33.252c7.562 1.877 15.538 1.267 23.714-.537l6.964-7.615h5.148l-.429 10.297c-1.72 5.124-5.444 9.981-9.439 14.802l-2.36 35.397 2.26.033c7.543 15.676 14.112 25.378 27.13 47.807-4.16 1.364-9.581 1.05-14.587 1.287-7.66 3.47-12.519 7.823-17.32 12.195l.372 8.614c3.906 2.752 5.423 4.874 6.436 6.865l-10.941 5.148c-2.6 3.142-5.464 5.09-8.367 6.865l-.297 5.232z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.pragapd.toString()}
          id="pragapd"
          onClick={props.pathClick}
          d="M620.76 610.374l8.75-8.846c.245-2.104 1.39-3.128 3.119-3.453l50.902-53.241 12.253-.112c5.822-.512 7.41-4.511 8.242-9.133 3.363-5.391 7.008-10.563 10.597-15.674l-4.227-3.02c-1.091-1.892-.604-2.975.111-4.323l2.24-3.33.103-7.182-40.116-49.127.214-11.37-67.146-2.788-11.8 2.36-3.646-.215-13.301 3.861-19.307 4.505-5.578 6.436-18.45 11.37-5.792 2.36c-19.597 11.668-24.871 13.652-21.881 35.397-3.264 6.842-8.858 11.949-15.117 16.783 4.983 6.083 13.746 20.68 21.017 36.294 3.062 6.576 13.476 30.714 40.828 38.225 11.586 3.182 15.485 2.137 23.104 1.39 2.536-.249 6.941-.353 10.53.052 11.625 1.313 23.148 4.851 34.35 12.78z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.wawer.toString()}
          id="wawer"
          onClick={props.pathClick}
          d="M817.216 496.764c-4.092 2.77-5.337 4.385-7.152 6.3l-20.495 6.238-2.896.446c-1.764-1.35-3.718-2.463-4.344-5.235-14.407 4.974-29.996 9.061-43.217 14.925l-3.23.111-5.347-14.814c-1.44-2.19-2.513-.709-3.675-.111-7.975 9.594-15.744 19.6-22.834 30.965-.832 4.622-2.42 8.621-8.242 9.133l-12.253.112-50.902 53.241c-1.729.325-2.874 1.349-3.12 3.453l-8.6 8.858c16.568 13.457 28.088 33.158 27.28 57.082-.54 14.76 1.563 23.552 6.446 36.542 7.41 19.711 19.939 35.087 35.394 46.641 15.198 9.147 44.266 21.662 48.908 64.774 1.516 16.533 13.46 31.157 24.73 35.764 11.424 4.67 22.293 13.15 24.823 27.633 9.523.845 18.585-2.474 27.333-7.133l.858-7.294L845 856.243l1.501 3.647 62.428-9.01c14.945-11.816 29.89-19.078 44.836-26.601l32.608 22.096-2.36 5.363 19.093 16.304 16.304-21.881-19.522-16.304 5.792-12.228 6.865-2.146 3.218-12.657c1.214-4.274-.555-9.498 6.865-11.799l7.508-.643.858-2.36 6.782-.57c.823-4.231-2.678-5.657-7.508-6.221l-.734-12.318 6.221.429.33 4.653 1.989-.132.214-8.366-3.647-.215-22.558-30.933c5.97-3.097 10.488-7.98 13.078-13.689l-59.076-37.42.836-.114-3.481-1.07-.536-3.214-52.215-.536c-1.05-8.992-1.614-17.343-.536-27.044l5.088-3.482c-3.072-4.815-6.665-13.272-9.104-13.656 1.085-4.106 1.679-8.212 1.339-12.317l-4.285-8.301-3.48-.268-12.854-23.296 2.143-.803c-1.084-7.39-.226-17.692 0-27.045 4.405-1.843 7.723-4.773 10.71-8.034l-9.372-11.514c-9.586-5.741-18.072-6.529-26.241-5.89-7.927-5.463-15.521-11.257-24.1-16.067-4.284-1.56-8.568-7.69-12.853-11.782z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.mokotow.toString()}
          id="mokotow"
          onClick={props.pathClick}
          d="M363.366 695.533l13.382-66.065 23.267 4.22 46.897-13.141.241-1.327 5.907-1.567 1.568 1.447 1.687-.603 5.666 6.149 2.532 7.836 8.319 9.644 8.077-.361 4.702.361 3.857-10.247 19.651-.362 6.028-6.028v-3.134l-1.808-8.439 6.028-1.326.964 2.532 11.091-3.135-.482-2.532 16.396-3.978 6.088-9.111c11.413 2.859 14.836 1.922 22.455 1.175 2.536-.249 6.941-.353 10.53.052 12.017 1.357 23.868 5.096 35.43 13.602 15.638 13.074 27.158 32.349 26.35 56.273-.325 8.876.306 16.134 2.058 22.762-2.5.384-4.16 2.679-4.946 6.184-4.537 1.096-7.987 3.279-8.52 8.38-.589 5.369 2.395 10.4-3.22 15.795l-3.118.403c-5.577 1.518-4.819 14-5.433 19.619l-10.464 1.408c-1.377-3.522-12.456-9.589-19.216-15.393l-17.104 17.003c-5.271 6.036-10.344 12.31-16.902 16.802-4.43-.483-6.568.64-8.35 2.012l11.972 19.216c.245 1.012-.147 1.705-1.51 1.912-6.932-1.034-14.486-2.463-18.612-1.71-4.393 2.089-8.701 2.17-13.088 2.707l-14.759-14.177c-2.325-1.063-3.578-3.025-4.737-4.921-1.846-.74-3.68-1.526-5.692-1.687.277 5.961-2.663 10.954-6.923 15.928l-5.378 6.202c-5.415 3.486-11.674 6.602-18.264 8.818-1.422-.133-5.036-3.198-6.432-3.402-.427-.062-3.889-.108-3.889-.108l-.032 1.732-2.22-.048c-1.317.783-1.076 1.956-1.09 3.066-2.447-.47-4.893-.581-7.34-.54-1.1-.42-1.891-.686-3.785-1.503.012.828.615 1.469.687 2.722-1.375 2.867-2.828 5.38-3.278 7.78l-3.89-2.279-2.374-.005.012-2.87-8.39.416c-.934-1.48-.682-3.553-1-5.34-2.31-.717-4.75-1.952-7.231-3.347l-.847 1.81c-.422.621-1.02.995-2.653.186-1.314-.235-13.666-5.276-22.78-8.367l-1.683.783c-6.432-3.636-12.74-5.422-19.096-7.903-.836.757-1.05 2.24-1.403 3.561-.87-.704-1.78-1.55-2.339-1.566l-.48-3.345-.618-62.304c-.568-9.14-4.453-15.28-10.754-17.699"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.wilanow.toString()}
          id="wilanow"
          onClick={props.pathClick}
          d="M639.34 1016.607c-.71.299-1.157.512-2.458-.728-1.887-2.04-3.051-4.804-4.362-7.421-1.953-.827.266-2.166-1.472-3.09-1.738-.924-.646-1.898-.78-2.87-.568-2.552-1.565-4.797-2.844-6.842l-19.82-2.817c.935-1.621 8.648-.737 13.784-.805 1.418.851 2.808 1.268 4.125.503-.737-3.917-4.716-7.329-6.238-11.167-1.42.368-3.03.673-4.963 0-1.932-.674-3.5-.113-5.25 0 1.07-.806 2.133-1.613 2.113-2.616-.409-1.84-2.393-3.489-3.671-5.232l6.944 5.775c1.879-.73 3.452-.904 5.33-.745.31.124-1.685-5.977-2.515-5.835-2.044.351-5.212-1.664-4.528-2.341 1.422.1 3.028.757 4.003.003-.752-3.26-3.803-6.724-4.807-10.036-1.192.114-2.94 1.484-3.019-.906.787-.645 1.27-1.34.846-2.186-1.23-.503-1.747-1.717-2.515-2.681-1.955 1.243-3.621-1.076-7.31-1.61 1.88-.222 3.44-.832 4.52-1.343-.893-.51-2.132-.769-1.98-2.04.612-1.166 1.212-2.004 2.616-2.917-2.426-2.919-4.085-4.43-5.634-7.043-.908.714-1.808 1.507-2.616 3.22l-1.245-2.867c.742-.184 1.597-.22 2.15-1.158.405-2.447-.028-3.303-1.11-3.582-1.78-.46-1.982-3.415-.007-4.853-.968-1.18-.971-2.778-.97-3.958-.805-.756-1.01-1.75-1.333-2.698-1.483-.287-2.426.102-2.692 1.337-2.415-2.198-4.791-.879-7.244 0 .931-1.157 1.888-2.235 7.926-2.89.726-.285-.104-3.56-1.713-8.005-1.51-.648-2.076 1.807-2.93 3.311.427-1.258 1.06-3.046-.088-3.714-.989.376-2.326 1.205-3.104.194-.797-1.035-1.727-.476-2.628-.265-.899-2.537-2.681-4.928-4.128-7.374-.82.855-2.407.556-3.796.557l-.217-7.434c-3.37-6.525-6.533-12.907-10.086-19.208l5.161-3.089-5.046-8.051-1.058.804c-.569-1.83-1.243-2.392-1.91-3.042l.795-.816c-.941-.567-1.798-2.148-2.346-3.402-.693-1.603-1.885-1.666-2.316-2.933-.917-2.051-1.506-2.643-2.925-4.194l-1.408.906c.284-1.53.329-3.118-.196-4.849-1.252-.923-2.106.147-2.588-.293-1.477-.912-1.157-1.59-1.69-2.69l-.456-5.046c-1.283-4.098-2.566-5.037-3.472-8.979-1.317-3.583-2.088-4.59-3.19-7.006-2.233-4.894-4.196-8.991-5.34-7.944-.18-3.081-1.547-4.411-2.788-6.115-2.225-3.405-3.77-4.935-5.634-7.345l-5.634-7.344c-.788.067-.98-.014-.93 2.762-.716.072-1.32-1.21-2.061-2.654.144-.993.89-1.463 1.784-1.857-2.513-2.381-3.377-4.762-4.628-7.143.57-1.552 10.328-3.542 15.896-5.332 4.393-.589 8.787-.628 13.18-2.717 4.126-.753 11.68.676 18.613 1.71 1.362-.207 1.754-.9 1.509-1.911l-11.973-19.217c1.783-1.372 3.92-2.495 8.351-2.012 6.558-4.492 11.63-10.766 16.902-16.802l17.104-17.003c6.76 5.804 17.839 11.871 19.216 15.393l10.464-1.408c.614-5.62-.144-18.101 5.433-19.62l3.119-.402c5.614-5.396 2.63-10.426 3.22-15.795.532-5.101 3.982-7.284 8.52-8.38.785-3.505 2.265-5.62 4.76-6.141 1.168 4.185 2.656 8.638 4.573 13.737 7.41 19.711 19.939 35.087 35.394 46.641 15.198 9.147 44.266 21.662 48.908 64.774 1.516 16.533 13.46 31.157 24.73 35.764 11.424 4.67 22.259 13.055 24.789 27.538-7.235 1.988-13.857 3.797-21.529 4.05-.937 2.79-2.157 3.31-3.269 4.693 1.475 5.245 1.122 6.837.893 8.675-3.086 1.249-4.777.585-7.492.722l-7.51 7.793-5.51 10.758c-2.941 3.719-7.272 5.993-11.18 7.972l.371 4.505c-7.534 6.735-12.573 16.103-13.086 30.248-.394 2.055-3.762 4.149-6.007.215 0 0 .138-2.594-2.155-5.719-2.092-2.85-3.867-7.514-3.867-7.514l-6.364 5.16c-4.255 17.165-11.036 29.123-24.816 26.653l-17.151 15.88 2.59 5.217z"
          display="inline"
        ></path>
        <path
          className={"district " + props.state.ursynow.toString()}
          id="ursynow"
          onClick={props.pathClick}
          d="M639.605 1016.99l2.382.536 5.302 8.837-4.506.465c-3.763 2.099-10.446 4.497-17.07 4.05-9.194-.62-16.122 5.094-17.394 6.216-2.585 2.28-3.25 6.318-6.569 11.663-1.803 2.904-5.31 6.077-7.614 6.774-4.525 1.368-8.047-2.37-8.047-2.37l-48.764-34.396-9.894-2.653-8.559-6.214-.6-1.923-10.457-8.606-4.283 3.182-.66 3.26-15.355 16.633 1.237 2.203-39.755.847-.356 8.802-56.95.873c-6.267 1.457-11.461.198-17.253-1.288l.903-4.73s-7.09-1.511-6.593-2.62c.643-2.574 5.125-17.823 5.125-17.823l-5.322-2.19c-1.316-.935-1.328-3.095.05-5.531 2.367-4.253 4.294-7.59 6.797-12.81l-5.102-15.852c.427-3.041 1.92-4.383 3.746-6.58 1.98-1.934 3.377-3.858 4.992-6.749L365 958.12c.464-1.255-5.279-13.866-7.552-15.33.643-2.788.575-17.898.575-17.898l12.228-24.027c-1.373-1.955-2.698-3.686-3.935-5.322l2.3-6.423c.167-1.284 3.764.089 11.712.271l-4.308-64.14c.567-4.528-1.806-6.284-1.185-10.654.044-7.461-.64-18.981-.453-20.866.521-5.237.91-10.276.533-14.366.575.16 1.484 1.006 2.354 1.71.353-1.32.567-2.803 1.403-3.56 6.355 2.48 12.664 4.266 19.096 7.902l1.683-.783c9.114 3.092 21.466 8.132 22.78 8.367 1.634.809 2.23.435 2.653-.185l.847-1.81c2.48 1.394 4.92 2.63 7.231 3.346.318 1.787.066 3.86 1 5.34l8.39-.416-.012 2.87 2.375.005 3.889 2.279c.45-2.4 1.903-4.913 3.278-7.78-.072-1.253-.675-1.894-.687-2.722 1.894.817 2.685 1.083 3.785 1.503 2.447-.041 4.893.07 7.34.54.014-1.11-.227-2.283 1.09-3.066l2.22.048.032-1.731s3.462.046 3.89.108c1.395.203 5.009 3.268 6.431 3.401 6.59-2.215 12.849-5.332 18.264-8.818l5.378-6.201c4.26-4.974 7.2-9.967 6.923-15.929 2.012.162 3.845.947 5.692 1.687 1.16 1.896 2.411 3.858 4.737 4.921l14.673 14.135c-5.574 1.842-15.332 3.832-15.902 5.384 1.251 2.38 2.115 4.762 4.628 7.143-.894.394-1.64.864-1.784 1.857.741 1.443 1.345 2.726 2.061 2.654-.05-2.776.142-2.696.93-2.763l5.634 7.345c1.864 2.41 3.409 3.94 5.634 7.345 1.241 1.704 2.608 3.034 2.788 6.115 1.144-1.047 3.107 3.05 5.34 7.944 1.102 2.416 1.873 3.423 3.19 7.006.906 3.942 2.189 4.881 3.472 8.979l.457 5.046c.532 1.1.212 1.778 1.689 2.69.482.44 1.336-.63 2.588.293.525 1.731.48 3.32.196 4.849l1.408-.906c1.419 1.551 2.008 2.143 2.925 4.194.43 1.267 1.623 1.33 2.316 2.933.548 1.254 1.405 2.835 2.346 3.402l-.794.816c.666.65 1.34 1.212 1.909 3.042l1.058-.804 5.046 8.051-5.16 3.09c3.552 6.3 6.715 12.682 10.085 19.207l.217 7.434c1.389 0 2.977.298 3.796-.557 1.447 2.446 3.23 4.837 4.128 7.374.901-.211 1.83-.77 2.628.265.778 1.011 2.115.182 3.104-.194 1.147.668.515 2.456.087 3.714.855-1.504 1.421-3.959 2.931-3.311 1.609 4.445 2.439 7.72 1.713 8.005-6.038.655-6.995 1.733-7.926 2.89 2.453-.879 4.83-2.198 7.244 0 .266-1.235 1.209-1.624 2.692-1.337.323.948.528 1.942 1.332 2.698 0 1.18.002 2.778.971 3.958-1.975 1.438-1.774 4.393.007 4.853 1.082.279 1.515 1.135 1.11 3.582-.553.938-1.408.974-2.15 1.158l1.245 2.866c.808-1.712 1.708-2.505 2.616-3.22 1.55 2.615 3.208 4.125 5.634 7.044-1.404.913-2.004 1.75-2.616 2.917-.152 1.271 1.086 1.53 1.98 2.04-1.08.511-2.64 1.12-4.52 1.343 3.689.534 5.355 2.853 7.31 1.61.768.964 1.286 2.178 2.515 2.68.424.847-.06 1.542-.846 2.187.079 2.39 1.827 1.02 3.019.905 1.004 3.313 4.055 6.777 4.807 10.037-.976.755-2.581.097-4.003-.003-.684.677 2.484 2.692 4.528 2.341.83-.142 2.825 5.96 2.515 5.835-1.878-.16-3.452.014-5.33.745l-6.944-5.775c1.278 1.743 3.262 3.392 3.67 5.232.02 1.003-1.042 1.81-2.112 2.616 1.75-.113 3.318-.674 5.25 0 1.932.673 3.544.368 4.963 0 1.522 3.838 5.5 7.25 6.238 11.167-1.317.764-2.707.348-4.125-.503-5.136.068-12.85-.816-13.784.805l19.82 2.817c1.279 2.045 2.276 4.29 2.845 6.842.133.972-.959 1.946.78 2.87 1.737.924-.482 2.263 1.471 3.09 1.31 2.617 2.475 5.38 4.362 7.42 1.301 1.24 1.879.88 2.723 1.113z"
          display="inline"
        ></path>
      </g>
      <g display="inline" opacity="1" transform="translate(30.77 -317.15)">
        <path
          className="river"
          fillRule="evenodd"
          stroke="none"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.5"
          d="M125.47 361.854l-17.296 11.074 5.849 13.563c8.36 6.493 15.46 15.129 19.411 29.118 3.214 11.188 6.976 23.198 11.075 35.712-.114 15.596-2.309 31.192 1.617 46.787 9.034 14.575 27.292 38.403 52.601 56.083l10.612 17.83c.959 4.199 1.165 8.586 8.959 11.075 13.021 14.953 29.522 23.194 47.16 29.242 9.196 3.63 22.999 11.267 39.819 21.527l21.651 48.778 3.484 22.771 10.204 32.975 27.126 45.916 28.247 27.749 28.868 49.027 15.555 21.402c13.76 13.38 30.598 18.005 48.653 19.163 13.549-1.338 27.131-2.594 47.16 11.946 13.848 10.935 22.771 30.595 25.011 62.092 1.614 13.244 4.302 26.406 10.204 39.32 5.626 10.746 13.335 18.99 22.274 25.759 13.13 10.59 29.38 15.79 39.196 32.103 4.785 12.032 8.621 18.61 15.005 39.836 1.468 9.093 8.422 28.208 25.95 33.824 5.74 1.84 6.982 8.598 9.316 10.333 1.524 13.618-.901 27.512 14.061 40.192l32.104-5.973-4.23-4.604-4.605-18.292c-9-10.397-18.001-17.988-27.002-24.762-13.05-19.74-26.766-26.53-37.041-34.884 2.07-13.188-2.556-23.854-16.218-41.849-8.209-10.812-22.535-18.222-34.964-26.049-12.433-10.596-21.886-22.932-30.362-35.837-2.538-6.04-3.867-14.2-5.102-22.522 2.068-11.937 4.5-23.99-1.493-33.348-6.547-23.349-15.308-32.075-24.14-39.446-20.652-17.097-42.933-17.576-65.203-18.167-13.223-2.443-25.423-6.037-32.726-15.057-9.04-12.733-14.038-26.131-20.074-38.865-16.856-27.343-37.417-47.278-56.244-70.678-12.466-15.417-15.585-28.635-20.989-42.39-5.892-13.809-8.57-24.182-8.583-32.339-.007-4.483-5.168-3.795-5.649-4.366 2.696-21.817-7.582-38.782-17.125-52.514-15.503-17.45-35.432-27.306-55.87-35.214-22.2-9.961-40.578-24.309-52.387-44.258-4.57-7.589-11.045-14.702-19.158-21.405l-14.066-15.717c-8.22-13.705-22.933-27.952-24.016-41.063 4.085-20.883 6.762-40.292-1.617-57.24-12.342-20.253-19.245-39.42-25.011-58.358z"
        ></path>
      </g>
      <g
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        fontFamily="Arial"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="bold"
        textAnchor="middle"
        transform="translate(-52.372 -18.034)"
        writingMode="lr-tb"
      >
        <text
          x="407.051"
          y="188.573"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="407.051" y="188.573">
            Białołęka
          </tspan>
        </text>
        <text
          x="223.919"
          y="320.925"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="223.919" y="320.925">
            Bielany
          </tspan>
        </text>
        <text
          x="189.711"
          y="465.437"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="189.711" y="465.437">
            Bemowo
          </tspan>
        </text>
        <text
          x="123.501"
          y="692.008"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="123.501" y="692.008">
            Ursus
          </tspan>
        </text>
        <text
          x="284.998"
          y="760.12"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="284.998" y="760.12">
            Włochy
          </tspan>
        </text>
        <text
          x="474.716"
          y="916.019"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="474.716" y="916.019">
            Ursynów
          </tspan>
        </text>
        <text
          x="505.813"
          y="708.993"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="505.813" y="708.993">
            Mokotów
          </tspan>
        </text>
        <text
          x="329.234"
          y="638.066"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="28"
          xmlSpace="preserve"
        >
          <tspan x="329.234" y="638.066">
            Ochota
          </tspan>
        </text>
        <text
          x="307.548"
          y="544.805"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="307.548" y="544.805">
            Wola
          </tspan>
        </text>
        <text
          x="360.854"
          y="435.464"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="28"
          xmlSpace="preserve"
        >
          <tspan x="360.854" y="435.464">
            Żoliborz
          </tspan>
        </text>
        <text
          x="456.803"
          y="538.057"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="28"
          xmlSpace="preserve"
        >
          <tspan x="456.803" y="538.057">
            Śród-
          </tspan>
          <tspan x="456.803" y="566.057">
            mieście
          </tspan>
        </text>
        <text
          x="489.453"
          y="439.678"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="28"
          xmlSpace="preserve"
        >
          <tspan x="489.453" y="439.678">
            Praga
          </tspan>
          <tspan x="489.453" y="467.678">
            Północ
          </tspan>
        </text>
        <text
          x="546.037"
          y="357.043"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="546.037" y="357.043">
            Targówek
          </tspan>
        </text>
        <text
          x="602.354"
          y="518.582"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="28"
          xmlSpace="preserve"
        >
          <tspan x="602.354" y="518.582">
            Praga
          </tspan>
          <tspan x="602.354" y="546.582">
            Południe
          </tspan>
        </text>
        <text
          x="752.861"
          y="429.26"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="28"
          xmlSpace="preserve"
        >
          <tspan x="752.861" y="429.26">
            Rembertów
          </tspan>
        </text>
        <text
          x="811.985"
          y="696.308"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="811.985" y="696.308">
            Wawer
          </tspan>
        </text>
        <text
          x="901.478"
          y="518.488"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="901.478" y="518.488">
            Wesoła
          </tspan>
        </text>
        <text
          x="652.061"
          y="862.151"
          style={{
            lineHeight: "100%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontSize="32"
          xmlSpace="preserve"
        >
          <tspan x="652.061" y="862.151">
            Wilanów
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default WarsawMap;