import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apartmentOperations } from '../../modules/apartment';

class ApartmentList extends React.Component {
  componentDidMount() {
    this.props.getAllApartments();
  }

  render() {
    const { apartments } = this.props;
    if (!apartments) return null;
    return (
      <div id="apartment_list">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="h1">Apartments list</h1>
          </div>
          <div className="col-12 col-md-6">
            <Link to="/apartments/create" className="btn btn-primary">
              Create new apartment
            </Link>
          </div>
        </div>

        {apartments.map(({ name, _id }) => {
          return <div key={_id}>{name}</div>;
        })}
      </div>
    );
  }
}
const mapState = state => {
  const { apartments } = state.apartment;
  return { apartments };
};
const mapDispatch = {
  getAllApartments: apartmentOperations.getAllApartments,
};
export default connect(mapState, mapDispatch)(ApartmentList);
