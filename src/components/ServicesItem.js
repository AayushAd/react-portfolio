import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
text-align: center;


.services__icon {
    svg {
        width: 3rem;

    }
}

.servicesItem__title{
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
}

.para{
    margin-top: 2rem;
}

`;

export default function ServicesItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate eveniet laboriosam nobis,necessitatibus temporibus reiciendis",
}) {
  return (
    <ItemStyles>
      <div className="services__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
