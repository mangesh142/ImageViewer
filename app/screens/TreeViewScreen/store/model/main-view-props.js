var TreeViewProps = (function () {
    /**********************Variable Declaration**************************/
    var aPostData = [];
    var bFlag = false;
    var iViewId;
    /**********************All Getter and Setter*************************/
    return {
        getPostData: function () {
            return aPostData;
        },

        setPostData: function (_oData) {
            aPostData = _oData;
        },
        getFlag: function () {
            return bFlag;
        },

        setFlag: function (_bFlag) {
            bFlag = _bFlag;
        },

        getViewId: function () {
            return iViewId;
        },

        setViewId: function (_iViewId) {
            iViewId = _iViewId;
        }

    }
})();

module.exports = TreeViewProps;