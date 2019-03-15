import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
function IndexPage() {
    router.push('/Home')
    return (
        <div>
            123456
        </div>
    );
}
IndexPage.propTypes = {
};
export default connect()(IndexPage);
