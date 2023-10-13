import { Component } from "react";
import { StyledDiv, StyledInput } from "./ContactForm.styled";

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    };

    onChangeForm = (evt) => {
        const { name, value } = evt.target;
        this.setState({ [name]: value })
    }

    onSaveForm = (evt) => {
        evt.preventDefault();
        const success = this.props.handleSubmit(this.state);
        if (success) {
            this.resetForm();
        }
    }

    resetForm = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <StyledDiv>
                <form onSubmit={this.onSaveForm}>
                    <label>
                        Name
                        <StyledInput
                            onChange={this.onChangeForm}
                            type="text"
                            name="name"
                            value={this.state.name}
                            required
                        />
                    </label>
                    <label>
                        Number
                        <StyledInput
                            onChange={this.onChangeForm}
                            type="tel"
                            name="number"
                            value={this.state.number}
                            required
                        />
                    </label>
                    <button type="submit">Add contact</button>
                </form>
            </StyledDiv >
        );
    }
}

export default ContactForm