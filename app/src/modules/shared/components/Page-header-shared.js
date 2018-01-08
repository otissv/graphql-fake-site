import React from 'react';
import { Link } from 'react-router';
import SharedButton from './Button-shared';
import Icons from 'react-uikit-icons';
import ButtonGroup from 'react-uikit-button-group';
import velocity from 'velocity-animate';

function getIcon (body) {
  switch (body.toLowerCase()) {
    case 'back':
      return 'arrow-left';
    case 'edit':
      return 'edit';
    case 'delete':
      return 'trash-o';
    default:
      return null;
  }
}

class PageHeader extends React.Component {
  componentDidMount () {
    const element = document.querySelector('.App-page-header');
    velocity(
      element,
      { opacity: [1, 0.5] },
      { duration: 300 }
    );
  }
  render () {
    const props = this.props;

    const itemProp = props.items || [];
    const items = itemProp.map(item => {
      let icon;
      const bodyLoweCase = item.body.toLowerCase();

      if (item.icon) {
        icon = item.icon;

      } else if (bodyLoweCase.substr(0, 3) === 'new') {
        icon = 'file-o';

      } else {
        icon = getIcon(item.body);
      }

      return <li
        key={item.body.split(' ').join('_')}
        className='App-page-header-toolbar-link'
      >
        {item.href
          ? <Link to={item.href} onClick={item.onClick}>
              <SharedButton>
              <Icons icon={icon} /> {item.body}
              </SharedButton>
            </Link>

          : <SharedButton 
            onClick={item.onClick} 
            back={bodyLoweCase === 'back' ? true: false}
          >
            <Icons icon={icon} /> {item.body}
          </SharedButton>
        }
      </li>;
    });

    return <div className='App-page-header'>
      <h1 className='App-page-header-heading'>{props.title}</h1>

      <ButtonGroup className='App-page-header-toolbar' display='block' margin='smallBottom'>
        {props.items ? items : null}
      </ButtonGroup>
    </div>;
  }
};

export default PageHeader;
