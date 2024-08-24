<script>
</script>

<!-- Begin Page Content -->
<div class="container-fluid pt-3">
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">Tables</h1>
  <p class="mb-4">
    DataTables is a third party plugin that is used to generate the demo table
    below. For more information about DataTables, please visit the <a
      target="_blank"
      href="https://datatables.net">official DataTables documentation</a
    >.
  </p>

  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Contestants Table</h6>
    </div>
    <div class="row py-3">
      <div class="col ms-3">
        <span>Show</span>
        &nbsp;
        <input
          value="10"
          type="number"
          class="form-control d-inline-block"
          style="width: 11%;font-size:14px"
        />
        &nbsp;

        <span>entries</span>
      </div>
      <div class="col text-end me-3">
        <span style="font-weight: 500;">Search:</span>
        <input
          type="search"
          class="form-control d-inline-block w-50"
          name=""
          id=""
        />
      </div>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table
          class="table table-bordered table-hover"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Junior Technical Author</td>
              <td>San Francisco</td>
              <td>66</td>
              <td>2009/01/12</td>
              <td>$86,000</td>
            </tr>
            <tr>
              <td>Cedric Kelly</td>
              <td>Senior Javascript Developer</td>
              <td>Edinburgh</td>
              <td>22</td>
              <td>2012/03/29</td>
              <td>$433,060</td>
            </tr>
            <tr>
              <td>Airi Satou</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>33</td>
              <td>2008/11/28</td>
              <td>$162,700</td>
            </tr>
            <tr>
              <td>Brielle Williamson</td>
              <td>Integration Specialist</td>
              <td>New York</td>
              <td>61</td>
              <td>2012/12/02</td>
              <td>$372,000</td>
            </tr>
            <tr>
              <td>Herrod Chandler</td>
              <td>Sales Assistant</td>
              <td>San Francisco</td>
              <td>59</td>
              <td>2012/08/06</td>
              <td>$137,500</td>
            </tr>
            <tr>
              <td>Rhona Davidson</td>
              <td>Integration Specialist</td>
              <td>Tokyo</td>
              <td>55</td>
              <td>2010/10/14</td>
              <td>$327,900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row pt-1 pb-4 d-flex align-items-center">
      <div class="col ms-3">
        <span style="font-weight: 500;" class="text-secondary"
          >Showing 1 to 10 of 57 entries</span
        >
      </div>
      <div class="col text-end me-3">
        <div class="border d-flex w-75">
          <div class="px-3 border-end p-1">Previous</div>
          <div class="px-3 p-1">1</div>
          <div class="px-3 border-start p-1">2</div>
          <div class="px-3 border-start p-1">3</div>
          <div class="px-3 border-start p-1">4</div>
          <div class="px-3 border-start p-1">5</div>
          <div class="px-3 border-start p-1">Next</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  td,
  th {
    color: rgba(0, 0, 0, 0.6);
  }
</style>
