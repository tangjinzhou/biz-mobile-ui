import * as React from 'react';
import * as classNames from 'classnames';

interface RowProps extends BizuiProps{
    key?: string,
    colSpan?: number,
    rowSpan?: number,
    selectable?: boolean,
    selected?: boolean,
    onRowSelection?: Function,
}
interface TableProps extends BizuiProps{
    columns?: Array<Object | Array<Object>>,
    fixedHeader?: boolean,
    selectable?: boolean,
    multiSelectable?: boolean,
    dataSource?: Array<Object>,
    height?: string,
}

class Table extends React.Component<TableProps, any> {
    static defaultProps = {
        columns: [],
        fixedHeader: false,
        selectable: false,
        multiSelectable: true,
        dataSource: [],
        height: 'auto',
    }
    getHeader(columns){
        let tempColumns = [];
        if(!columns[0]) {
            return null;
        } else if(Array.isArray(columns[0])){
            tempColumns = [...columns];
        } else {
            tempColumns[0] = [...columns];
        }
        const headerTr = [];
        for(let i = 0, trLen = tempColumns.length; i < trLen; i++) {
            let tempTr = [];
            for(let j = 0, thLen = tempColumns[i].length; j < thLen; j++) {
                let thData = tempColumns[i][j];
                thData.attr = thData.attr || {};
                let headertTh = <th key={'th-' + j} colSpan={thData.attr.colSpan}>{thData.title}</th>;
                tempTr.push(headertTh);
            }
            headerTr.push(<tr key={'tr-'+i}>{tempTr}</tr>);
        }
        return (
            <table>
                <thead>
                {headerTr}
                </thead>
            </table>
        )
    }
    render(){
        const {columns} = this.props;
        const header = this.getHeader(columns);
        return (
            <div>
                {header}
                <div>
                    <table>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table;