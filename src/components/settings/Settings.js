import React, { Component } from 'react'
import './settings.scss'
import WalletSettings from './WalletSettings'
import RoleSettings from './RoleSettings'
import MembershipSettings from './MembershipSettings'
import FoodCategorySettings from './FoodCategorySettings'

class Settings extends Component {
    state = {
        role_tab_classes: ['tab-menu-item', 'active-tab'],
        wallet_tab_classes: ['tab-menu-item'],
        foodCategory_tab_classes: ['tab-menu-item'],
        membership_tab_classes: ['tab-menu-item']
    }

    handleRoleClick = () => {
        this.setState({
            role_tab_classes: ['tab-menu-item', 'active-tab'],
            wallet_tab_classes: ['tab-menu-item'],
            foodCategory_tab_classes: ['tab-menu-item'],
            membership_tab_classes: ['tab-menu-item']
        });
    }
    handleWalletClick = () => {
        this.setState({
            role_tab_classes: ['tab-menu-item'],
            wallet_tab_classes: ['tab-menu-item', 'active-tab'],
            foodCategory_tab_classes: ['tab-menu-item'],
            membership_tab_classes: ['tab-menu-item']
        });
    }
    handleFoodCategoryClick = () => {
        this.setState({
            role_tab_classes: ['tab-menu-item'],
            wallet_tab_classes: ['tab-menu-item'],
            foodCategory_tab_classes: ['tab-menu-item', 'active-tab'],
            membership_tab_classes: ['tab-menu-item']
        });
    }
    handleMembershipPlan = () => {
        this.setState({
            role_tab_classes: ['tab-menu-item'],
            wallet_tab_classes: ['tab-menu-item'],
            foodCategory_tab_classes: ['tab-menu-item'],
            membership_tab_classes: ['tab-menu-item', 'active-tab']
        });
    }

    render() {
        let role_base = this.state.role_tab_classes[0];
        let role_active = '';
        let tab_content = '';

        if (this.state.role_tab_classes.length > 1) {
            role_active = this.state.role_tab_classes[1];
            tab_content = <RoleSettings />;
        }
        let wallet_base = this.state.wallet_tab_classes[0];
        let wallet_active = '';
        if (this.state.wallet_tab_classes.length > 1) {
            wallet_active = this.state.wallet_tab_classes[1];
            tab_content = <WalletSettings />;
        }
        let foodCategory_base = this.state.foodCategory_tab_classes[0];
        let foodCategory_active = '';
        if (this.state.foodCategory_tab_classes.length > 1) {
            foodCategory_active = this.state.foodCategory_tab_classes[1];
            tab_content = <FoodCategorySettings />;
        }
        let membership_base = this.state.membership_tab_classes[0];
        let membership_active = '';
        if (this.state.membership_tab_classes.length > 1) {
            membership_active = this.state.membership_tab_classes[1];
            tab_content = <MembershipSettings />;
        }

        return (
            <div>
                <div className="tab-menu">
                    <div onClick={this.handleRoleClick} className={role_base + ' ' + role_active}>Role</div>
                    <div onClick={this.handleWalletClick} className={wallet_base + ' ' + wallet_active}>Wallet</div>
                    <div onClick={this.handleFoodCategoryClick} className={foodCategory_base + ' ' + foodCategory_active}>Food Category</div>
                    <div onClick={this.handleMembershipPlan} className={membership_base + ' ' + membership_active}>Membership Plan</div>
                </div>

                <div className="tab-content">{tab_content}</div>
            </div>
        )
    }
}

export default Settings