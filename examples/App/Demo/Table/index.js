import * as React from 'react';
import * as classNames from 'classnames';
import Checkbox from '../Checkbox';
function getStyles(props) {
    return {};
}
class Table extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            rowsStatus: [],
        };
        this.selectedChange = (row, checked, attr = {}) => {
            let newStatus = [];
            if (row === 'all') {
                newStatus = this.getSelectedStatus(checked);
            }
            else {
                newStatus = [...this.state.rowsStatus];
                if (!this.props.multiSelectable) {
                    newStatus = this.getSelectedStatus(false);
                }
                newStatus[row].selected = checked;
            }
            this.props.selectedChange(row, checked, attr);
            this.setState({ rowsStatus: newStatus });
        };
    }
    componentWillMount() {
        this.setState({ rowsStatus: this.getRowsStatus(this.props) });
    }
    getRowsStatus(props) {
        const rowsStatus = [];
        const { dataSource, selectable, multiSelectable } = props;
        let selectedNums = 0;
        if (selectable) {
            for (let i = 0, rowsLen = dataSource.length; i < rowsLen; i++) {
                let dataItem = dataSource[i];
                dataItem.attr = Object.assign({}, { selected: false, selectable: true }, dataItem.attr);
                if (dataItem.attr.selected) {
                    selectedNums++;
                }
                rowsStatus.push(dataItem.attr);
            }
            if (!multiSelectable && selectedNums > 1) {
                console.error('multiSelectable为false时, 不允许出现多个行被默认选中!');
            }
        }
        return rowsStatus;
    }
    getSelectedStatus(checked) {
        const newStatus = [];
        for (let i = 0, rowsLen = this.state.rowsStatus.length; i < rowsLen; i++) {
            let status = this.state.rowsStatus[i];
            if (status.selectable) {
                status.selected = checked;
            }
            newStatus.push(status);
        }
        return newStatus;
    }
    getSelectedRows() {
        const selectedRows = [];
        for (let i = 0, rowsLen = this.state.rowsStatus.length; i < rowsLen; i++) {
            let status = this.state.rowsStatus[i];
            if (status.selected) {
                selectedRows.push(i);
            }
        }
        return selectedRows;
    }
    setAllRowsSelected() {
        this.setState({ rowsStatus: this.getSelectedStatus(true) });
    }
    cancelAllRowsSelected() {
        this.setState({ rowsStatus: this.getSelectedStatus(false) });
    }
    invertRowsSelected() {
        const newStatus = [];
        for (let i = 0, rowsLen = this.state.rowsStatus.length; i < rowsLen; i++) {
            let status = this.state.rowsStatus[i];
            if (status.selectable) {
                status.selected = !status.selected;
            }
            newStatus.push(status);
        }
        this.setState({ rowsStatus: newStatus });
    }
    getHeader() {
        const { columns, dataSource, selectable, multiSelectable, prefixCls } = this.props;
        let tempColumns = [];
        if (!columns[0]) {
            return null;
        }
        else if (Array.isArray(columns[0])) {
            tempColumns = [...columns];
        }
        else {
            tempColumns[0] = [...columns];
        }
        const headerTr = [];
        let selectableAll = true;
        if (this.state.rowsStatus.length > 0) {
            for (let i = 0, rowsLen = this.state.rowsStatus.length; i < rowsLen; i++) {
                let status = this.state.rowsStatus[i];
                if (status.selectable && !status.selected) {
                    selectableAll = false;
                    break;
                }
            }
        }
        else {
            selectableAll = false;
        }
        for (let i = 0, trLen = tempColumns.length; i < trLen; i++) {
            let headerTh = [];
            //全选
            if (i === 0 && selectable) {
                headerTh.push(React.createElement("th", {key: 'th-checkbox-all', className: `${prefixCls}-checkbox`, rowSpan: tempColumns.length}, React.createElement(Checkbox, {onChange: (checked, e) => this.selectedChange('all', checked), checked: selectableAll, disabled: !multiSelectable})));
            }
            for (let j = 0, thLen = tempColumns[i].length; j < thLen; j++) {
                let thData = tempColumns[i][j];
                headerTh.push(React.createElement("th", {key: 'th-' + j, style: { textAlign: thData.align, width: thData.width }, colSpan: thData.colSpan}, thData.title));
            }
            headerTr.push(React.createElement("tr", {key: 'tr-' + i}, headerTh));
        }
        return (React.createElement("thead", null, headerTr));
    }
    getTbody() {
        const { columns, dataSource, selectable, multiSelectable, prefixCls } = this.props;
        let dataSourceField = this.props.dataSourceField;
        if (!dataSourceField) {
            if (Array.isArray(columns[0])) {
                dataSourceField = columns[columns.length - 1];
            }
            else {
                dataSourceField = columns;
            }
        }
        const tbodyTr = [];
        for (let i = 0, dataLen = dataSource.length; i < dataLen; i++) {
            let tempData = dataSource[i];
            tempData['attr'] = tempData['attr'] || {};
            let tbodyTd = [];
            if (selectable) {
                let tdSelectable = this.state.rowsStatus[i].selectable;
                let tdSelected = this.state.rowsStatus[i].selected;
                tbodyTd.push(React.createElement("td", {key: 'td-checkbox-' + i, className: `${prefixCls}-checkbox`}, React.createElement(Checkbox, {onChange: (checked, e) => this.selectedChange(i, checked, tempData['attr']), checked: tdSelected, disabled: !tdSelectable})));
            }
            for (let j = 0, indexLen = dataSourceField.length; j < indexLen; j++) {
                let field = dataSourceField[j].field;
                let content = dataSourceField[j].content || function (item, index, field) {
                    return item[field];
                };
                tbodyTd.push(React.createElement("td", {key: 'td-' + j}, content(tempData, i, field)));
            }
            tbodyTr.push(React.createElement("tr", {key: 'tr-' + i}, tbodyTd));
        }
        return (React.createElement("tbody", null, tbodyTr));
    }
    render() {
        const { prefixCls, className, fixedHeader, style, width, height } = this.props;
        const tableClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const header = this.getHeader();
        const tbody = this.getTbody();
        return (React.createElement("div", {className: tableClass, style: Object.assign({}, style, { height: height })}, fixedHeader ?
            React.createElement("div", {style: { width: width }}, React.createElement("table", null, header), React.createElement("div", null, React.createElement("table", null, tbody)))
            :
                React.createElement("table", {style: { width: width }}, header, tbody)));
    }
}
Table.defaultProps = {
    prefixCls: 'biz-table',
    className: '',
    columns: [],
    fixedHeader: false,
    selectable: false,
    multiSelectable: true,
    dataSource: [],
    height: 'auto',
    selectedChange: () => { },
};
export default Table;
