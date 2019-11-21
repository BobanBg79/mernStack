import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apartmentOperations } from '../../modules/apartment';
import loadingSpinner from '../../assets/images/loading.gif';

class ApartmentList extends React.Component {
  componentDidMount() {
    this.props.getAllApartments();
  }

  renderList = () => {
    const { apartmentsList } = this.props;
    if (apartmentsList.length) {
      return (
        <div className="col-12 item-wrapper">
          {apartmentsList.map(({ apartment_name, _id }) => {
            return (
              <div key={_id}>
                <Link to={`/apartments/${_id}`}>{apartment_name}</Link>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div className="col-12">No apartments available</div>;
    }
  };

  render() {
    const { apartmentsList, loading } = this.props;
    if (!apartmentsList) return null;
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
        <div className="row">
          {loading ? (
            <img src={loadingSpinner} alt="loading" />
          ) : (
            this.renderList()
          )}
        </div>
      </div>
    );
  }
}
const mapState = state => {
  const { apartmentsList, loading } = state.apartments;
  return { apartmentsList, loading };
};
const mapDispatch = {
  getAllApartments: apartmentOperations.getAllApartments,
};
export default connect(mapState, mapDispatch)(ApartmentList);
