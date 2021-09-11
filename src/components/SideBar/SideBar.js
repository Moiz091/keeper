import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { MdLightbulbOutline, MdLabelOutline, MdEdit } from 'react-icons/md';
import { BsBell, BsTrash } from 'react-icons/bs';
import { FaArchive } from 'react-icons/fa';
import TitledButton from './../../UI/TitledButton/TitledButton';
import { Link } from 'react-router-dom';
import KeepContext from './../../context/KeepContext';

const SideBar = ({ classes, isExpanded, location }) => {

  const isActive = path => {
    return location.pathname === path;
  };

  return (
    <div className={classes}>
      <div className="flex flex-col h-screen h-full bg-white">
        <div>
          <Link to="/home">
            <TitledButton
              label="Note"
              isExpanded={isExpanded}
              isActive={isActive('/home') ? true : false}
            >
              <MdLightbulbOutline size="1.5em" />
            </TitledButton>
          </Link>
          <Link to="/archive">
            <TitledButton
              label="Archive"
              isExpanded={isExpanded}
              isActive={isActive('/archive') ? true : false}
            >
              <FaArchive size="1.5em" />
            </TitledButton>
          </Link>

          <Link to="/trash">
            <TitledButton
              label="Trash Bin"
              isExpanded={isExpanded}
              isActive={isActive('/trash') ? true : false}
            >
              <BsTrash size="1.5em" />
            </TitledButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SideBar);
