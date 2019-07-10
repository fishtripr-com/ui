<template>
    <div class="employee-card">

      <h4 class="employeeCardName">{{employeeFirstName}}</h4>
      <h4 class="employeeCardLastName">{{employeeLastName}}</h4>
      <p class="employeeCardRole">{{employeeRole}}</p>

  </div>
</template>

<script>
export default {
    name: 'employee-card',
    props: {
    employeeFirstName: { type: String, default: 'Quentin' },
    employeeLastName: { type: String, default: 'Walravens' },
    employeeRole: { type: String, default: 'Co-Founder & CEO' }
            }
}

</script>

<style lang="scss" scoped> 

.employee-card{ 
  font-family: 'Montserrat', sans-serif !important;
  
  .employeeCardName, .employeeCardLastName {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin:0;
  }

  .employeeCardRole{
  font-weight: 400;
  font-size: .65rem;
  line-height: 1.15rem;
  margin:0;
  }
}



</style>

