({onClick = f => console.log(f), nextScreen = v=>console.log(v),
  input = false, dropDown = false , name="wrong", type ="number", options=[]})

[{
  dropDown:true,
  name:"Gender",
  options=["Male","Female"]},
  {
    name:"Bodyweight",
    input: true,
    type:"number"
  },
  {
    name:"Height",
    input:true,
    type:"number"
  },
  {
    name:"Age",
    input:true,
    type:"number"
  },
  {
    name:"ActivityLevel",
    dropDown:true,
    options: [
      "Codeworks Programmer",
      "Office Worker",
      "Normal Person",
      "Regular Exercise",
      "Savage"
    ]
  },
  {
    name:"Goal",
    dropDown: true,
    options: [
      "Get Sexy",
      "Maintenece",
      "Lose 10%",
      "Lose 15%",
      "Lose 20%"
    ]
  }
  ]
