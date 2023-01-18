export default function Icon({ name, size = 30, fill, className = "" }) {
  switch (name) {
    case "menu":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 22 22`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path
            stroke={fill}
            stroke-linecap="round"
            stroke-width="1.4"
            d="M1.7 5.3h18.6m-18.6 5h18.6m-18.6 5h18.6"
          />
        </svg>
      );
    case "ticket":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 22 22`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <g clip-path="url(#a)">
            <path
              fill="#1D1714"
              d="m21.84 8.147-2.852-2.854a.538.538 0 0 0-.761 0l-.38.38a1.062 1.062 0 0 1-1.522 0 1.062 1.062 0 0 1 0-1.52l.38-.381a.538.538 0 0 0 0-.761L13.852.158a.538.538 0 0 0-.76 0L.156 13.093a.538.538 0 0 0 0 .76l7.989 7.99c.21.21.55.21.76 0L21.842 8.908a.538.538 0 0 0 0-.76ZM8.527 20.7 1.3 13.473l8.749-8.75 1.332 1.331 5.896 5.897-8.75 8.75Zm9.51-9.51-6.633-6.634-.594-.595L13.472 1.3l2.092 2.093a2.16 2.16 0 0 0 0 3.043 2.16 2.16 0 0 0 3.044 0L20.7 8.528l-2.663 2.663Z"
            />
            <path
              fill="#1D1714"
              d="M8.303 17.373a.456.456 0 0 0 .645 0l5.129-5.13a.456.456 0 1 0-.646-.645l-5.128 5.13a.457.457 0 0 0 0 .645ZM6.465 14.89a.457.457 0 0 0 .646.645l5.128-5.13a.456.456 0 1 0-.646-.644L6.466 14.89ZM10.4 7.922a.457.457 0 0 0-.645 0L4.627 13.05a.456.456 0 1 0 .645.645l5.129-5.13a.456.456 0 0 0 0-.644Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h22v22H0z" />
            </clipPath>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 200 200`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <rect
            x="94"
            y="0"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.4214 100)"
            width="12"
            height="200"
          />
          <rect
            x="0"
            y="94"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.4214 100)"
            width="200"
            height="12"
          />{" "}
        </svg>
      );
    case "down":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 22 22`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M16.822 7.874a.608.608 0 0 1 0 .86l-5.37 5.37a.68.68 0 0 1-.962 0l-5.312-5.31a.608.608 0 0 1 .86-.861l4.933 4.932 4.99-4.99a.608.608 0 0 1 .86 0Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 97 97"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M64.4,16.1h9.1V0.7C71.9,0.5,66.5,0,60.2,0C47,0,38,8,38,22.8v13.6H23.5v17.2H38V97h17.8V53.6h13.9L72,36.4H55.8V24.5C55.8,19.5,57.2,16.1,64.4,16.1L64.4,16.1z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 60 60"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <g id="instagram">
            <path d="M41.2,0H18.8C8.4,0,0,8.4,0,18.8v22.5C0,51.6,8.4,60,18.8,60h22.5C51.6,60,60,51.6,60,41.2V18.8C60,8.4,51.6,0,41.2,0zM54.4,41.2c0,7.2-5.9,13.1-13.1,13.1H18.8c-7.2,0-13.1-5.9-13.1-13.1V18.8c0-7.2,5.9-13.1,13.1-13.1h22.5c7.2,0,13.1,5.9,13.1,13.1V41.2z" />
            <path d="M30,15c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S38.3,15,30,15z M30,39.4c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4C39.4,35.2,35.2,39.4,30,39.4z" />
            <circle cx="46.1" cy="13.9" r="2" />
          </g>
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M4.5,6.7v12.9H0.2V6.7H4.5z M4.8,2.7c0,0.6-0.2,1.2-0.7,1.6s-1,0.6-1.8,0.6h0c-0.7,0-1.3-0.2-1.7-0.6S0,3.3,0,2.7C0,2,0.2,1.5,0.7,1.1s1-0.6,1.8-0.6s1.3,0.2,1.7,0.6C4.6,1.5,4.8,2,4.8,2.7z M20,12.2v7.4h-4.3v-6.9c0-0.9-0.2-1.6-0.5-2.1c-0.4-0.5-0.9-0.8-1.6-0.8c-0.5,0-1,0.1-1.4,0.4c-0.4,0.3-0.6,0.7-0.8,1.1c-0.1,0.3-0.1,0.6-0.1,1.1v7.2H6.9c0-3.5,0-6.3,0-8.4s0-3.4,0-3.9l0-0.6h4.3v1.9h0c0.2-0.3,0.4-0.5,0.5-0.7c0.2-0.2,0.4-0.4,0.7-0.7s0.7-0.4,1.1-0.6c0.4-0.1,0.9-0.2,1.5-0.2c1.5,0,2.7,0.5,3.6,1.5C19.5,8.8,20,10.3,20,12.2z" />
        </svg>
      );
    default:
      return "⚠️";
  }
}
