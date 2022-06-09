// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)
const returnLastTwoDrivers = (drivers) => drivers.slice(-2)
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier=(value) =>{
    return function(fare){
        return fare * value
    }

}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers =(drivers, selectingDrivers)=>{
    return selectingDrivers(drivers)

}