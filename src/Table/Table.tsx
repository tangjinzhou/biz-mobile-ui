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
    header?: Array<Object>,
    fixedHeader?: boolean,
    selectable?: boolean,
    multiSelectable?: boolean,
    dataSource: Array<Object>,
    height?: string,
}

class Table extends React.Component<TableProps, any> {
    static defaultProps = {

    }
    render(){
        return (
            <div></div>
        )
    }
}

export default Table;