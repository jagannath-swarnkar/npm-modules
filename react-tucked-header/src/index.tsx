import * as React from 'react'
// import styles from './styles.module.css';
import styles from './index.css';
// console.log('styles', styles)


type Props = {
  classes?: string,  // overwrite component class - use !important if not works for you
  children: JSX.Element // pass your component 
}
export const TuckerComponent = (props:Props) => 
{
 
  React.useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      // window.removeEventListener('mousewheel');
    };
  }, []);
  const handleScroll = (event: any) => {
    const classes: string = `${styles.tucked_header} ${props.classes || ""}`;
    if (window.pageYOffset < 70) {
      document.getElementById('tucked-header')!.className = classes + " " ;
    } else if (event.wheelDelta >= 0) {
      document.getElementById('tucked-header')!.className = classes +' '+ styles.tucked_header_in;
    } else {
      document.getElementById('tucked-header')!.className = classes +' '+ styles.tucked_header_out;
    }
  };
  return (
    <div id="tucked-header" className={`${styles.tucked_header} ${props.classes || ""}`}>
      {props.children}
    </div>
    )
}
