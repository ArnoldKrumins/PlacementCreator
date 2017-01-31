/**
 * Created by arnold.krumins on 31/01/2017.
 */
Ext.define('PlacementCreator.view.tree.Tree', {
    extend: 'Ext.Container',

    requires: [
        'PlacementCreator.store.treeData',
        'PlacementCreator.view.tree.TreeController',
        'PlacementCreator.view.tree.TreeModel'
    ],

    xtype: 'tree',

    viewModel: {
        type: 'tree'
    },

    controller: 'tree',

    layout: {
        type: 'table',
        columns: 2,
        tdAttrs: { style: 'padding: 10px;' }
    },


    defaults: {
        xtype: 'treepanel',
        width: 300,
        height: 200,
        rootVisible: false,
        // Sharing the store synchronizes the views:
        //store: 'treeData'
        bind:{
            store:'root'
        }
    },

    initComponent: function() {
        this.items = [
            {
                title: 'Tree'
            },
            {
                title: 'Tree with No Lines',
                lines: false
            },
            {
                title: 'Tree with Arrows',
                useArrows: true,
                colspan: 2
            }
        ];

        this.callParent();
    }


   /* items: [

    ] */
});