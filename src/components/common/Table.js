import React, { Component } from 'react'
import Modal from './Modal'

import PlusICO_whiteIco from '../../assets/icons/plus-white.svg'
import AngleLeftIco from '../../assets/icons/angle-left.svg'
import AngleRightIco from '../../assets/icons/angle-right.svg'
import FilterIco from '../../assets/icons/filter.svg'
import EditIco from '../../assets/icons/edit.svg'
import TrashRedIco from '../../assets/icons/trash-red.svg'
import ElipsisHIco from '../../assets/icons/elipsis-h.svg'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metaData: this.props.payload.metaData,
            collections: this.props.payload.collections,
            actions: this.props.payload.actions,

            sortState: true,
            ddmenu_tblmenu: false,
            ddmenu_tblitem: false,
            clickItemIndex: null,
            editTrIndex: null,

            thKeys: null,

            pagination_data: {
                currentPage: 0,
                perPage: 0,
                totalPages: 0
            },

            formData: [],
            error: null,

            payload: {
                name: null,
                val: null
            },
            search: "",
            searchKey: "",

            openPopup: false,
            itemClicked: null
        };
    }

    metaData = () => {
        return this.state.metaData
    }
    collections = () => {
        return this.state.collections || [];
    }
    filteredCollections = () => {
        const criteria = this.state.search.toLowerCase();
        const key = this.state.searchKey;
        if (criteria && key) {
            return Object.values(this.state.collections).filter(item => {
                if (item[key]) {
                    const to_compare = item[key].toLowerCase();
                    return to_compare.includes(criteria)
                }
                return this.state.collections;
            });
        } else {
            return this.state.collections;
        }
    }
    sortCollections = (sort_key) => {
        this.setState({
            sortState: !this.state.sortState
        });
        if (this.state.sortState) {
            this.state.collections.sort(function (a, b) {
                if (a[sort_key] < b[sort_key]) { return -1; }
                if (a[sort_key] > b[sort_key]) { return 1; }
                return 0;
            })
        } else {
            this.state.collections.sort(function (a, b) {
                if (a[sort_key] > b[sort_key]) { return -1; }
                if (a[sort_key] < b[sort_key]) { return 1; }
                return 0;
            })
        }
    }
    setCollections = (payload) => {
        this.setState({
            collections: payload
        });
    }

    item_to_show = (i) => {
        return this.state.clickItemIndex === i;
    }
    item_to_edit = (i) => {
        return this.state.editTrIndex === i;
    }
    tblmenu_onclick = () => {
        this.setState({
            ddmenu_tblmenu: !this.state.ddmenu_tblmenu
        });
    }
    tblmenuitem_onclick = (itemIndex) => {
        if (this.state.clickItemIndex === itemIndex) {
            this.setState({
                clickItemIndex: null
            });
        } else {
            this.setState({
                clickItemIndex: itemIndex
            });
        }
        this.setState({
            ddmenu_tblitem: !this.state.ddmenu_tblitem
        })
    }
    viewTr_onclick = (itemIndex) => {
        this.setState({
            openPopup: true,
            itemClicked: itemIndex
        })
        this.tblmenuitem_onclick('');
    }
    editTr_onclick = (itemIndex) => {
        if (this.state.editTrIndex === itemIndex) {
            this.setState({
                editTrIndex: null
            });
        } else {
            this.setState({
                editTrIndex: itemIndex
            });
        }
        this.tblmenuitem_onclick('');
    }
    deleteTr_onclick = (itemIndex) => {
        let updatedCollection = [...this.state.collections];
        updatedCollection.splice(itemIndex, 1);
        this.tblmenuitem_onclick('');
    }
    paginate = (collection, page, numItems) => {
        if (!Array.isArray(collection)) {
            throw `Expect array and got ${typeof collection}`;
        }
        const currentPage = parseInt(page);
        const perPage = parseInt(numItems);
        const offset = (page - 1) * perPage;
        const paginatedItems = collection.slice(offset, offset + perPage);

        return {
            currentPage,
            perPage,
            total: collection.length,
            totalPages: Math.ceil(collection.length / perPage),
            data: paginatedItems
        };
    }
    prev = () => {
        let updatedCollection = [...this.state.collections];
        if (this.state.pagination_data.currentPage <= 1) {
            updatedCollection.pagination_data.currentPage = 1;
        } else {
            updatedCollection.pagination_data.currentPage -= 1;
        }
        this.setState({
            collection: updatedCollection
        });
    }
    next = () => {
        let updatedCollection = [...this.state.collections];
        if (this.state.pagination_data.currentPage >= this.state.pagination_data.totalPages) {
            updatedCollection.pagination_data.currentPage = this.state.pagination_data.totalPages;
        } else {
            updatedCollection.pagination_data.currentPage += 1;
        }
        this.setState({
            collection: updatedCollection
        });
    }
    loadedCollection = (page = 1, perPage = 5) => {
        // this.search_key = this.searchKey;
        // this.search_val = this.search;

        const getdata = this.filteredCollections();
        let updatePagination = this.state.pagination_data;

        if (!this.state.pagination_data.currentPage) {
            updatePagination.currentPage = page;
            updatePagination.perPage = perPage;
            updatePagination.totalPages = getdata.length + 1;
            this.setState({
                pagination_data: updatePagination
            });
        }

        return this.paginate(
            getdata,
            this.state.pagination_data.currentPage,
            this.state.pagination_data.perPage
        );
    }
    collections_keys = () => {
        if (this.state.collections.length > 0) {
            let obj = Object.values(this.state.collections);
            return Object.keys(obj[0]) || [];
        }
    }
    handleSearchKey = (event) => {
        this.setState({
            searchKey: event.target.value
        })
    }
    handleSearchCriteria = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    onEdit = (e) => {
        e.preventDefault();
        this.props.handle_create(this.state.formData, this.props.history);
    }
    handleChange = (e) => {
        const target = this.state.formData[e.target.name];
        this.setState({
            [target]: e.target.value
        });
    }
    toggle_modalDetail = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }

    render() {
        const { toggle_modal } = this.props;
        return (
            <div className="custom-table-wrapper">
                <div id="data-table" className="table-wrap">
                    <div className="pre-table">
                        <div className="table-titles">
                            <div className="table-title">{this.state.metaData.tblTitle}</div>
                            <div className="table-subtitle">{this.state.metaData.tblSubtitle}</div>
                        </div>
                        <div className="table-ctas">
                            <button onClick={toggle_modal} className="btn btn-blue">
                                <img alt="" src={PlusICO_whiteIco} /> Add New
                            </button>
                        </div>
                    </div>

                    <div className="tbl-controls">
                        <div className="search-wrap">
                            <select onChange={this.handleSearchKey}>
                                {this.collections_keys().map(item => <option key={item} value={item} >{item}</option>)}
                            </select>
                            <input onChange={this.handleSearchCriteria} type="search" placeholder="search..." />
                        </div>

                        <div className="tbl-pagination">
                            <span>
                                showing page {this.state.pagination_data.currentPage} out of {this.state.pagination_data.totalPages} pages
                            </span>
                            <img alt="" onClick={this.prev} src={AngleLeftIco} />
                            <img alt="" onClick={this.next} src={AngleRightIco} />
                        </div>

                    </div>

                    <div className="tbl nice nice-scroll">
                        <div>
                            <div className="tr thead">
                                {
                                    this.state.metaData.trCheckbox
                                        ? <div className="td-actions"></div>
                                        : null
                                }

                                {this.collections_keys().map(th =>
                                    <div key={th} onClick={() => this.sortCollections([th])} className="th">
                                        <span>{th}</span>
                                        <img alt="" src={FilterIco} />
                                    </div>
                                )}

                                {
                                    this.state.metaData.trActions
                                        ? <div className="td-actions"></div>
                                        : null
                                }
                            </div>
                        </div>
                        {this.loadedCollection().data.map((item, index) =>
                            <div key={index}>
                                {
                                    this.state.openPopup && this.state.itemClicked === index
                                        ? <Modal
                                            data={item}
                                            toggle_modal={this.toggle_modalDetail}
                                            modalTitle={this.state.metaData.tblTitle}
                                            actions={this.state.actions}
                                        />
                                        : null
                                }
                                {
                                    item
                                        ? (
                                            <div className="tr tbody">
                                                {
                                                    this.state.metaData.trCheckbox
                                                        ? (
                                                            <div className="td-actions">
                                                                <input type="checkbox" />
                                                            </div>
                                                        ) : (null)
                                                }
                                                {Object.values(item).map((val, key) =>
                                                    <div key={key} className="td">
                                                        {/* {console.log(Object.keys(item))} */}

                                                        {
                                                            this.collections_keys[key] === 'Image'
                                                                ? (
                                                                    this.item_to_edit(index)
                                                                        ? <input type="file" className="td-edit-input" />
                                                                        : <div className="trImg"><img src={val} /></div>
                                                                )
                                                                : (
                                                                    typeof val === "object"
                                                                        ? (
                                                                            this.item_to_edit(index)
                                                                                ? <input value={Object.values(val)} onChange={() => this.updateCollections(key, item.ID)} type="text" className="td-edit-input" />
                                                                                : (
                                                                                    <div>
                                                                                        {Object.keys(val).map((valValue, valKey) =>
                                                                                            <div className="td-obj" key={valKey}>
                                                                                                <span className="valKey">
                                                                                                    {
                                                                                                        Array.isArray(val)
                                                                                                            ? (null)
                                                                                                            : (<span>{valValue}</span>)
                                                                                                    }
                                                                                                </span>
                                                                                                <span className="valValue">{val[valValue]}</span>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                )
                                                                        )
                                                                        : (
                                                                            this.item_to_edit(index)
                                                                                ? <input value={val} onChange={() => this.updateCollections(key, item.ID)} type="text" className="td-edit-input" />
                                                                                : <span>{val}</span>
                                                                        )

                                                                )

                                                        }
                                                    </div>
                                                )}
                                                {
                                                    this.state.metaData.trActions
                                                        ? (
                                                            <div className="td-actions dropdown-wrap">
                                                                <button onClick={() => this.tblmenuitem_onclick(index)} className="btn-hollow btn-elipsis-v-center btn-x0"></button>
                                                                <div className="dropdown-wrap">
                                                                    {
                                                                        this.item_to_show(index)
                                                                            ? (
                                                                                <ul onClick={() => this.tblmenuitem_onclick('')} className="dropdown-menu">
                                                                                    <li onClick={() => this.viewTr_onclick(index)}>
                                                                                        <img alt="" src={ElipsisHIco} /> Details
                                                                                    </li>
                                                                                    <li onClick={() => this.editTr_onclick(index)}>
                                                                                        <img alt="" src={EditIco} /> Edit
                                                                                    </li>
                                                                                    <li onClick={() => this.deleteCollection([item.ID])}>
                                                                                        <img alt="" src={TrashRedIco} /> Delete
                                                                                    </li>
                                                                                </ul>
                                                                            )
                                                                            : (null)
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                        : (null)
                                                }
                                            </div>
                                        ) : (null)
                                }

                            </div>
                        )}
                    </div>

                    <div className="tbl-controls">
                        <div className="tbl-pagination">
                            <span>
                                showing page {this.state.pagination_data.currentPage} out of {this.state.pagination_data.totalPages} pages
                        </span>
                            <img alt="" onClick={this.prev} src={AngleLeftIco} />
                            <img alt="" onClick={this.next} src={AngleRightIco} />
                        </div>
                        {
                            this.state.metaData.tblSummary
                                ? <div className="table-subtitle">{this.state.metaData.tblSummary}</div>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Table