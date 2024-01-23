let expanses = []
let totalAmount=0

const Expansename = document.getElementById("nameInput")
const amount= document.getElementById("amountInput")
const date= document.getElementById("dateInput")
const addBtn= document.getElementById("btn")
const tableBody= document.getElementById("tablebody")
const totalAmountCell= document.getElementById("total")

addBtn.addEventListener('click',function(){
    const eName = Expansename.value
    const eAmount = Number(amount.value)
    const eDate = date.value

    if(eName === ''){
        alert("Please enter Expanse name")
        return
    }
    if(isNaN(eAmount) || eAmount < 0){
        alert("Please enter a valid amount")
        return
    }
    if(eDate===''){
        alert("Please select Date")
        return
    }

    expanses.push({eName,eAmount,eDate})

    totalAmount += eAmount
    totalAmountCell.textContent=totalAmount

    const newRow = tableBody.insertRow()

    const namecell = newRow.insertCell()
    const amountcell = newRow.insertCell()
    const datecell = newRow.insertCell()
    //const deletecell = newRow.insertCell()

    const deleteBtn = document.createElement('button')

    deleteBtn.textContent='Delete'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click',function(){
        expanses.splice(expanses.indexOf(expanse),1)

        totalAmount -= expanse.eAmount
        totalAmountCell.textContent=totalAmount

        tableBody.removeChild(newRow)

    })
    const expanse = expanses[expanses.length - 1]
    namecell.textContent=expanse.eName
    amountcell.textContent=expanse.eAmount
    datecell.textContent=expanse.eDate
   // deletecell.appendchild(deleteBtn)    

})


for(const expanse of expanses){
    totalAmount += eAmount
    totalAmountCell.textContent=totalAmount

    const newRow = tableBody.insertRow()

    const namecell = newRow.insertCell()
    const amountcell = newRow.insertCell()
    const datecell = newRow.insertCell()
   // const deletecell = newRow.insertCell()

    const deleteBtn = document.createElement('button')

    deleteBtn.textContent='Delete'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click',function(){
        expanses.splice(expanses.indexOf(expanse),1)

        totalAmount -= expanse.eAmount
        totalAmountCell.textContent=totalAmount

        tableBody.removeChild(newRow)

    })
    const expanse = expanses[expanses.length - 1]
    namecell.textContent=expanse.eName
    amountcell.textContent=expanse.eAmount
    datecell.textContent=expanse.eDate
    //deletecell.appendchild(deleteBtn)
}