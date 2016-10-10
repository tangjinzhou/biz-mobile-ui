import * as React from 'react';
import * as classNames from 'classnames';
import Checkbox from '../Checkbox';
interface HeaderTrProps extends BizuiProps {
    key?:string,
    colSpan?:number,
    rowSpan?:number,
    selectable?:boolean,
    selected?:boolean,
    onRowSelection?:Function,
    align?: string,
    width?: string,
    content?: Function,
    title: string,
    field?: string,
    attr?: Object
}
interface DataAttr {

}
interface TableProps extends BizuiProps {
    columns?:Array<HeaderTrProps | Array<HeaderTrProps>>,
    fixedHeader?:boolean,
    selectable?:boolean,
    multiSelectable?:boolean,
    dataSource?:Array<Object>,
    dataSourceField?:Array<HeaderTrProps>,
    height?:string,
    width?: string,
}
function getStyles(props){
    return {

    }
}
class Table extends React.Component<TableProps, any> {
    static defaultProps = {
        prefixCls: 'biz-table',
        className: '',
        columns: [],
        fixedHeader: false,
        selectable: false,
        multiSelectable: true,
        dataSource: [],
        height: 'auto',
    }
    state = {
        selectedRows: [],
    };
    componentWillMount() {
        this.setState({selectedRows: this.calculatePreselectedRows(this.props)});
    }
    componentWillReceiveProps(nextProps) {

    }
    calculatePreselectedRows(props) {
        return [];
    }
    getHeader() {
        const {columns,dataSource, selectable, multiSelectable, prefixCls} = this.props;
        let tempColumns = [];
        if (!columns[0]) {
            return null;
        } else if (Array.isArray(columns[0])) {
            tempColumns = [...columns];
        } else {
            tempColumns[0] = [...columns];
        }
        const headerTr = [];
        let selectableAll = true;
        if(selectable && multiSelectable) {
            for(let i = 0, dataLen = dataSource.length; i < dataLen; i++) {
                let attr = dataSource[i]['attr'] || {};
                let tdSelectable = attr.selectable === false ? false : true;
                if(tdSelectable && !attr.selected){
                    selectableAll = false;
                    break;
                }
            }
        } else {
            selectableAll = false;
        }
        for (let i = 0, trLen = tempColumns.length; i < trLen; i++) {
            let headerTh = [];
            //全选
            if(i === 0 && selectable) {
                headerTh.push(<th key={'th-checkbox-all'} className={`${prefixCls}-checkbox`} rowSpan={tempColumns.length}><Checkbox checked={selectableAll} disabled={!multiSelectable}/></th>);
            }
            for (let j = 0, thLen = tempColumns[i].length; j < thLen; j++) {
                let thData = tempColumns[i][j];
                thData.attr = thData.attr || {};
                headerTh.push(<th key={'th-' + j} style={{textAlign: thData.align, width: thData.width}} colSpan={thData.colSpan} data-attr={JSON.stringify(thData.attr)}>{thData.title}</th>);
            }
            headerTr.push(<tr key={'tr-'+i}>{headerTh}</tr>);
        }
        return (
            <thead>
            {headerTr}
            </thead>
        )
    }

    getTbody() {
        const {columns, dataSource, selectable, multiSelectable, prefixCls} = this.props;
        let dataSourceField = this.props.dataSourceField;
        if (!dataSourceField) {
            if (Array.isArray(columns[0])) {
                dataSourceField = columns[columns.length - 1] as Array<HeaderTrProps>;
            } else {
                dataSourceField = columns as Array<HeaderTrProps>;
            }
        }
        const tbodyTr = [];
        let tempSelected = false;//multiSelectable===false时, 仅有第一个被选中, 出现第二个时给错误提示
        for (let i = 0, dataLen = dataSource.length; i < dataLen; i++) {
            let tempData = dataSource[i];
            tempData['attr'] = tempData['attr'] || {};
            let tbodyTd = [];
            if(selectable) {
                let tdSelectable = tempData['attr'].selectable === false ? false : true;
                let tdSelected = tempData['attr'].selected;
                if(tdSelected && !multiSelectable) {
                    if(tempSelected) {
                        console.error('multiSelectable为false时, 不允许出现多个行被默认选中!');
                    }
                    tempSelected = !tempSelected;
                }
                tbodyTd.push(<td key={'td-checkbox-'+i} className={`${prefixCls}-checkbox`}><Checkbox checked={tdSelected} disabled={!tdSelectable}/></td>)
            }
            for (let j = 0, indexLen = dataSourceField.length; j < indexLen; j++) {
                let field = dataSourceField[j].field;
                let content = dataSourceField[j].content as Function || function (item, index, field) {
                            return item[field];
                        }
                tbodyTd.push(<td key={'td-' + j} data-attr={JSON.stringify(tempData['attr'])}>{content(tempData, i, field)}</td>);
            }
            tbodyTr.push(<tr key={'tr-'+i}>{tbodyTd}</tr>);
        }
        return (
            <tbody>
            {tbodyTr}
            </tbody>
        )

    }

    render() {
        const {prefixCls, className, fixedHeader, style, width, height} = this.props;
        const tableClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        const header = this.getHeader();
        const tbody = this.getTbody();
        return (
            <div className={tableClass} style={Object.assign({},style, {height: height})}>
                {fixedHeader ?
                    <div style={{width: width}}>
                        <table>
                            {header}
                        </table>
                        <div>
                            <table>
                                {tbody}
                            </table>
                        </div>
                    </div>
                    :
                    <table style={{width: width}}>
                        {header}
                        {tbody}
                    </table>
                }
            </div>
        )
    }
}

export default Table;