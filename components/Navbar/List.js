import React, { useState } from "react";
import styled from "styled-components";
import { primary } from "../../styles/pallete";

const listItems = [
  {
    id: 1,
    name: "Playground",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Connect",
    subItem: [
      {
        id: 4,
        name: "Gmail",
        link: "",
      },
      {
        id: 5,
        name: "Github",
        link: "",
      },
      {
        id: 6,
        name: "LinkedIn",
        link: "",
      },
    ],
  },
];
function List() {
  const [open, setOpen] = useState(false);
  return (
    <Ul>
      {listItems.map((item) => (
        <Li
          key={item.id}
          onMouseOver={() => {
            if (item.id === 3) {
              setOpen(true);
            }
          }}
        >
          <A href="">{item.name}</A>
          {item.id !== 3 ? (
            ""
          ) : (
            <Dropdown>
              {item.subItem.map((inItem) => (
                <A key={inItem.id} href={inItem.link}>
                  {inItem.name}
                </A>
              ))}
            </Dropdown>
          )}
        </Li>
      ))}
    </Ul>
  );
}

export default List;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;
const Li = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 4rem;
  transition: 0.2s ease-out;
  cursor: pointer;
`;
const A = styled.a`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-decoration: none;
  font-weight: 500;
  color: ${primary.black};
  transition: 0.2s ease-out;
  &:hover {
    color: ${primary.primary};
  }
`;
const Dropdown = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-out;
  position: absolute;
  top: calc(100% - 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  width: 20rem;
  border: 1px solid ${primary.border};
  background-color: ${primary.white};
  padding: 0 3rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${primary.border};
  }
`;
