// Higher Order Component

// Reuse code
// Render highjacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Some information: {props.info}</p>
    </div>
);

// const withAdminWarning  = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is privat info, please dont share!</p>}
//
//         <WrappedComponent {...props} />
//         </div>
//     );
// };
// const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <WrappedComponent {...props} />
                ) : (
                    <p>You need to sign in.</p>
                )
            }
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);



// ReactDOM.render(<AdminInfo isAdmin={true} info="Lorem ipsum" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Special information!" />, document.getElementById('app'));
