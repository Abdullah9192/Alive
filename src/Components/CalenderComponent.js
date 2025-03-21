import React from 'react'

export const CalenderComponent = () => {
  return (
    <div class="container gym-feature py-5">
    <div class="d-flex flex-column text-center mb-5">
        <h4 class="text-primary font-weight-bold">Class Timetable</h4>
        <h4 class="display-4 font-weight-bold">Working Hours and Class Time</h4>
    </div>
    <div class="tab-class">
        <ul class="nav nav-pills justify-content-center mb-4">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#class-all">All Classes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#class-cardio">Cardio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#class-crossfit">Crossfit</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#class-powerlifting">Powerlifting</a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="class-all" class="container tab-pane p-0 active">
                <div class="table-responsive">
                    <table class="table table-bordered table-lg m-0">
                        <thead class="bg-secondary text-white text-center">
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <th class="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="class-cardio" class="container tab-pane fade p-0">
                <div class="table-responsive">
                    <table class="table table-bordered table-lg m-0">
                        <thead class="bg-secondary text-white text-center">
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <th class="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td> 
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="class-crossfit" class="container tab-pane fade p-0">
                <div class="table-responsive">
                    <table class="table table-bordered table-lg m-0">
                        <thead class="bg-secondary text-white text-center">
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <th class="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                <td></td> 
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td><h5>Power Lifting</h5>James Alien</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="class-powerlifting" class="container tab-pane fade p-0">
                <div class="table-responsive">
                    <table class="table table-bordered table-lg m-0">
                        <thead class="bg-secondary text-white text-center">
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <th class="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td> 
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Power Lifting</h5>James Alien</td>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                <td></td>
                                <td><h5>Cardio</h5>John Deo</td>
                                <td></td>
                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                <td></td>
                                <td class="bg-primary text-white"><h5 class="text-white">Power Lifting</h5>James Alien</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
