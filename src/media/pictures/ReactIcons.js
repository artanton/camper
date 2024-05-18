import styled from 'styled-components';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { IoBedOutline } from 'react-icons/io5';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { FiTv } from "react-icons/fi";

export const Gearbox = styled(TbAutomaticGearbox)`
  color: ${p => p.theme.colors.hText};
  width: ${p => p.width || '20px'}; 
  height: ${p => p.height || '20px'};
  vertical-align: baseline;
`;

export const BedSolid = styled(IoBedOutline)`
 width: ${p => p.width || '20px'}; 
  height: ${p => p.height || '20px'};
  vertical-align: baseline;

  color: ${p => p.theme.colors.hText};
`;

export const Kitchen2 = styled(TbToolsKitchen2)`
 width: ${p => p.width || '20px'}; 
  height: ${p => p.height || '20px'};

  color: ${p => p.theme.colors.hText};
`;

export const Tv = styled(FiTv)`
 width: ${p => p.width || '20px'}; 
  height: ${p => p.height || '20px'};

  color: ${p => p.theme.colors.hText};
`;