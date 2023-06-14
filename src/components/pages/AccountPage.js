import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AccountPage() {
    const [verticalActive, setVerticalActive] = useState('tab1');
    const user = useSelector((state) => state.user)

    const handleVerticalClick = (value) => {
        if (value === verticalActive) return;
        setVerticalActive(value);
    };

    useEffect(() => {
        document.title = 'Account Page';
    }, []);

    return (
        <>
            <MDBRow>
                <div className="ms-5">
                    <h1>Account Page</h1>
                    <hr className="hr hr-blurry" />
                    <MDBRow>
                        <MDBCol size='3'>
                            <MDBTabs className='flex-column text-center'>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                        Home
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                        Profile
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                        Messages
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <Link to="/account/wishlist">
                                        <MDBTabsLink>
                                            Wishlist
                                        </MDBTabsLink>
                                    </Link>
                                </MDBTabsItem>
                            </MDBTabs>
                        </MDBCol>
                        <MDBCol size='9'>
                            <MDBTabsContent>
                                <MDBTabsPane show={verticalActive === 'tab1'}>
                                    <div className="wrapper bg-white">
                                        <h4>Account settings</h4>

                                        <hr className="hr" />

                                        <div className="py-2">

                                            <MDBInput wrapperClass='mb-4 w-50' value={user?.name} label='First name' id='form1' type='text' />

                                            <MDBInput wrapperClass='mb-4 w-50' value={user?.given_name} label='Account name' id='form2' type='text' />

                                            <div className="py-3 pb-4">
                                                <MDBBtn className='me-2' color="primary">Save Changes</MDBBtn>
                                                <MDBBtn className='me-1' color="secondary">Cancel</MDBBtn>
                                            </div>
                                            <hr className="hr" />
                                            <div>
                                                <MDBBtn className='me-1' color="danger">Delete Account</MDBBtn>
                                            </div>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
                                <MDBTabsPane show={verticalActive === 'tab3'}>Messages content</MDBTabsPane>
                                <MDBTabsPane show={verticalActive === 'tab4'}>Wishlist content</MDBTabsPane>
                            </MDBTabsContent>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBRow >
        </>
    );
};