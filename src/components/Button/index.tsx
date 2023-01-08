import { cloneElement } from "react";
import configs from "./config";

type Props = {
  children: JSX.Element;
  state: "primary" | "secondary" | "alternative" | "disabled" | "loading";
  className?: string;
  isDisabled: boolean;
  isLoading: boolean;
};

function Button(props: Props) {
  let { state } = props;

  if (props.isDisabled) state = "disabled";
  if (props.isLoading) state = "loading";

  const className = [
    "py-2 px-6 font-medium rounded-full relative appearance-none focus:outline-none transition-all duration-300 inline-flex items-center select-none overflow-hidden",
    configs?.state?.[state] || "",
    props.className || "",
  ];

  <link href=""></link>;

  let returnChildren = props.children;
  let returnContent = props.children.props.children;

  if (typeof props.children?.type === "object") {
    returnChildren = props.children.props.children;
    returnContent = props.children.props.children.props.children;
  }

  const children = cloneElement(returnChildren, {
    ...props.children.props,
    disabled: props.isDisabled || props.isLoading,
    children: (
      <>
        <span
          className={[
            "transition-all duration-300 inline-flex items-center",
            props.isLoading
              ? "-top-full opacity-0 invisible"
              : "top-0 opacity-100 visible",
          ].join(" ")}
        >
          {returnContent}
        </span>
        <span
          className={[
            "transition-all uration-300 absolute left-0 right-0 bottom-0 z-10 inline-flex items-center justify-center",
            props.isLoading ? "top-0 opacity-100" : "-top-full opacity-0",
          ].join(" ")}
        >
          <svg
            className="animate-spin w-5 h-5"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.2"
              cx="14"
              cy="14"
              r="13"
              className="stroke-white"
              stroke-width="2"
            />
            <path
              d="M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24"
              className="stroke-white"
              stroke-width="2"
            />
          </svg>
        </span>
      </>
    ),
  });

  return cloneElement(children, {
    className: className.join(" "),
  });
}

export default Button;
