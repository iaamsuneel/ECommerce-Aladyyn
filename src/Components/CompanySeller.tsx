const CompanySeller=()=>{
    return(<>
    <div className="company-tab">
    <div className="Toastify"></div>
    <form>
        <div className="card inputs-wrapper">
            <div className="row input-block">
                <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label required required">first
                        name</label>
                    <div className="input-wrap "><input type="text" className="form-control" name="firstName" 
                            placeholder="First Name"/></div>
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label required">Last
                        name</label>
                    <div className="input-wrap "><input type="text" name="lastName" className="form-control" 
                            placeholder="Last Name"/></div>
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label required">Email
                        address</label>
                    <div className="input-wrap "><input type="text" name="email" className="form-control" 
                            placeholder="example@aladyyn.pro"/></div>
                </div>
            </div>
            <div className="inputs-heading">Business Information</div>
            <div className="row input-block margin-fix">
                <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label required">Business
                        Name</label>
                    <div className="input-wrap "><input type="text" className="form-control" name="businessName"
                            placeholder="Business Name"/></div>
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label required">Primary
                        Contact Person</label>
                    <div className="input-wrap "><input type="text" name="primaryContactPerson" className="form-control"
                            placeholder="Primary Person"/></div>
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label required">Company
                        Registration Number</label>
                    <div className="input-wrap "><input type="text" name="companyRegistrationNumber" className="form-control"
                            placeholder="Company Registration Number"/></div>
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper"><label className="input-label">VAT Number <span
                            className="text-lowercase">(if applicable)</span></label>
                    <div className="input-wrap "><input type="text" name="vat" className="form-control" 
                            placeholder="Vat number"/></div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="input-wrapper required"><label className="input-label required">Phone Number</label>
                        <div className="input-wrap "><input type="text" name="phone" className="form-control"
                                placeholder="Mobile"/*  maxlength="14" */ value=""/></div>
                    </div>
                </div>
            </div>
            <div className="inputs-heading">Registered Business Address</div>
            <div className="row input-block">
                <div className="col-md-6 input-wrapper required"><label className="input-label required">address line 1</label>
                    <div className="input-wrap "><input type="text" className="form-control" name="addressLine1"
                            placeholder="Address"/><span className="input-info">Building number and Street</span></div>
                </div>
                <div className="col-md-6 input-wrapper"><label className="input-label">address line 2</label>
                    <div className="input-wrap "><input type="text" name="addressLine2" className="form-control"
                            placeholder="Address"/><span className="input-info">Room/Block/Apartments</span></div>
                </div>
                <div className="col-md-6 input-wrapper required"><label className="input-label">Country</label>
                    <div className="input-wrap "><select name="countryId" className="form-control drop-down" id="countryId">
                            <option value="" /* disabled="" */>Please select country</option>
                            <option value="61c2fb83dc7c0d455ba5e627">Afghanistan</option>
                            <option value="61c2fb83dc7c0d455ba5e62a">Albania</option>
                            
                        </select></div>
                </div>
                <div className="col-md-6 input-wrapper required"><label className="input-label">State / Region</label>
                    <div className="input-wrap "><select className="form-control drop-down" name="stateId">
                            <option value="" /* disabled="" */>Please select state</option>
                        </select></div>
                </div>
                <div className="col-md-6 input-wrapper"><label className="input-label">City</label>
                    <div className="input-wrap"><select className="form-control drop-down" name="cityId">
                            <option value="">Please select city</option>
                        </select></div>
                </div>
                <div className="col-md-6 input-wrapper required"><label className="input-label required">ZIP / Postal
                        Code</label>
                    <div className="input-wrap "><input type="text" name="postcode" className="form-control" 
                            placeholder="Zip Code"/></div>
                </div>
            </div>
            <div className="row input-block">
                <div className="col-12 input-wrapper required mb-0 textarea-info-wrapper"><label
                        className="input-label required">Comment</label>
                    <div className="input-wrap "><textarea className="form-control" name="comment"
                            placeholder="Tell us more about the services you provide"></textarea></div><label
                        className="textarea-info input-label input-info position-static">Comment should not exceed 300
                        characters.</label>
                </div>
            </div>
            <div className="form-check"><input type="checkbox" name="privacyPolicy" id="selectCheckbox"
                    className="form-check-input "/><label  className="form-check-label">Please accept our <a
                        className="term-conditions" href="/terms-and-conditions" target="_blank">terms and
                        conditions</a></label>
                <div className="invalid-feedback"></div>
            </div>
        </div>
        <div className="btn-wrap"><input className="btn" type="submit" value="submit"/></div>
    </form>
</div>
    </>)
}
export default CompanySeller;