import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {
    Table,
    Button,
} from '@bizfe/biz-mobile-ui';

export default class TableDemo extends React.Component {
    constructor(...args) {
        super(...args);
        this._table = null;
    }
    selectedChange = (row, checked, attr) => {
        console.log(row, checked, attr);
        console.log(this._table.getSelectedRows());
    }
    cancelAllSelected = () => {
        this._table.cancelAllRowsSelected();
        console.log(this._table.getSelectedRows());
    }
    setAllSelected = () => {
        this._table.setAllRowsSelected();
    }

    invertSelected = () => {
        this._table.invertRowsSelected();
    }
    render() {
        const columns = [
            [
                {title: '实时消耗', colSpan: 10}
            ],
            [
                {title: '地区', field: 'area', width: px2rem(100), attr: {}},
                {title: '名称', field: 'name', width: px2rem(100),  attr: {}, content:
                    function (item, index, field) {
                        return <div>{item.area}<br/>{item.name}</div>;
                    }
                },
                {title: '消耗', field: 'cost',  attr: {test: 'cost',}, align: 'left'},
                {title: '环比', field: 'subCost',  attr: {test: 'subCost',}, align: 'left'},
                {title: '消耗', field: 'cost',  attr: {test: 'cost',}, align: 'left'},
                {title: '环比', field: 'subCost', attr: {test: 'subCost',}, align: 'left'},
                {title: '消耗', field: 'cost', width: px2rem(100),  attr: {test: 'cost',}, align: 'left'},
                {title: '环比', field: 'subCost', width: px2rem(100),  attr: {test: 'subCost',}, align: 'left'},
                {title: '消耗', field: 'cost', width: px2rem(100),  attr: {test: 'cost',}, align: 'left'},
                {title: '环比', field: 'subCost', width: px2rem(100),  attr: {test: 'subCost',}, align: 'left'}
            ]
        ];
        const data = [{
            area: '北京',
            name: '搜狗',
            cost: '1298,23',
            subCost: '-12',
            attr:{
                selected: true,
            }
        }, {
            area: '上海',
            name: '搜狐',
            cost: '90.23',
            subCost: '+98',
            attr:{
                selectable: false,
                selected: true,
            }
        }, {
            area: '广州',
            name: '搜猫',
            cost: '1765,12.34983773666626227727',
            subCost: '--',
            attr:{
                //selected: true,
            }
        },{
            area: '北京',
            name: '搜狗',
            cost: '1298,23',
            subCost: '-12',
            attr:{
                //selected: true,
            }
        },{
            area: '深圳',
            name: '搜狗',
            cost: '1298,23',
            subCost: '-12',
            attr:{
                //selected: true,
            }
        }];
        return (
            <div>
                <Table
                    ref={(c) => this._table = c}
                    columns={columns}
                    dataSource={data}
                    width="200%"
                    height={px2rem(200)}
                    selectable={true}
                    multiSelectable={true}
                    selectedChange={this.selectedChange}
                />
                <Button onTouchTap={this.cancelAllSelected} size="small">取消选择</Button>
                <Button onTouchTap={this.setAllSelected} size="small">全选</Button>
                <Button onTouchTap={this.invertSelected} size="small">反选</Button>
            </div>
        );
    }
}