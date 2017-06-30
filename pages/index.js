import React from 'react'
import Head from 'next/head'
import axios from 'axios';
import Header from '../components/header'

export default class extends React.Component {
  static async getInitialProps() {
    const res = await axios.get('http://localhost:8080/api/recipes');
    const recipeList = res.data;
    return { recipeList }
  }

  constructor() {
    super()
    this.state = { formData: { name: '', instructions: '' } }
  }

  setForm(prop) {
    return ev => {
      const state = this.state || {}
      const formData = state.formData || {}
      this.setState(Object.assign({}, state, {
        formData: Object.assign({}, formData, {
          [prop]: ev.target.value
        })
      }));
    }
  }

  updateName(_id) {
    return ev => {
    const state = this.state || {}
    let recipeList = this.state.recipeList || this.props.recipeList || []
    const updatedElementIndex = recipeList.map(x => x._id).indexOf(_id);
    recipeList[updatedElementIndex].name = ev.target.value;
    this.setState(
       recipeList
     ); 
    }
  }  

  updateInstructions(_id) {
    return ev => {
    const state = this.state || {}
    let recipeList = this.state.recipeList || this.props.recipeList || []
    const updatedElementIndex = recipeList.map(x => x._id).indexOf(_id);
    recipeList[updatedElementIndex].instructions = ev.target.value;
    this.setState(
       recipeList
     ); 
    }
  } 

  isFormInvalid() {
    const state = this.state || {}
    const formData = state.formData || {}
    return !formData.name || !formData.instructions
  }

  add() {
    return ev => {
      ev.preventDefault()
      const state = this.state || {}
      const formData = state.formData || {}
      this.setState(Object.assign({}, this.state, {
        formData: { name: '', instructions: '' }
      }))      

      axios.post('http://localhost:8080/api/recipes', formData)
        .then((res) => {
          const state = this.state || {}
          const recipeList = this.state.recipeList || this.props.recipeList || []
          this.setState(Object.assign({}, state, {
            recipeList: [res.data].concat(recipeList)
          }))
        })
        .catch(error => console.error(error.stack))
    }
  }

  remove(_id) {
    return ev => {
      axios.delete(`http://localhost:8080/api/recipes/${_id}`)
        .then((res) => {
          const state = this.state || {}
          const recipeList = this.state.recipeList || this.props.recipeList || []
          this.setState(Object.assign({}, state, {
            recipeList: recipeList.filter(recipe => recipe._id != _id)
          }))
        })
        .catch(error => console.error(error.stack))
    }
  }

  update(_id) {
    return ev => {
      const state = this.state || {}
      const recipeList = this.state.recipeList || this.props.recipeList || []
      const updatedElementIndex = recipeList.map(x => x._id).indexOf(_id);
      const updateFormData = { name: recipeList[updatedElementIndex].name, instructions: recipeList[updatedElementIndex].instructions };
      axios.put(`http://localhost:8080/api/recipes/${_id}`, updateFormData);        
    }
  }

  render() {
    const { formData } = this.state
    const recipeList = this.state.recipeList || this.props.recipeList
    return (
      <div>
        <Head>
          <title>Recipe Box</title>
        </Head>
        <Header>Recipe Box</Header>
        <table>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            {
              recipeList.map((recipe, i) => {                
                return (
                  <tr key={i}>
                    <td>
                      <input type="text" onChange={this.updateName(recipe._id)} value={recipe.name} />
                    </td>
                    <td>
                      <input type="text" onChange={this.updateInstructions(recipe._id)} value={recipe.instructions} />
                    </td>
                    <td><button onClick={this.remove(recipe._id)}>Delete</button></td>
                    <td><button onClick={this.update(recipe._id)}>Update</button></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <br /><br />
        <div id="input-recipe">
          <form onSubmit={this.add()}>
            <input
              type="text"
              onChange={this.setForm('name')}
              value={formData.name}
              placeholder="Name" /><br /><br />
            <input
              type="text"
              onChange={this.setForm('instructions')}
              value={formData.instructions}
              placeholder="Instructions" /><br /><br />
            <button disabled={this.isFormInvalid()}>Add</button>
          </form>
        </div>
        <style jsx>
          {`
              table {
                  border-collapse: collapse;
              }

              table, td, th {
                  border: 1px solid black;
              }                      
          `}
        </style>
      </div>

    )
  }
}

