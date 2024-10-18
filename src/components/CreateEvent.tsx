import React, { useState } from 'react';
import '../../src/CreateEvent.css'; // Import the CSS file
import { saveEvent, updateEvent } from '../services/apiService';
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEventContext } from './EventContext';
import { showToast } from '../Shared/Toaster';

const EventForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editEventId = location.state?.eventId || '';
  const editEvent: any = {};
  const [formData, setFormData] = useState({
    event_name: editEvent?.event_name || '',
    venue_address: editEvent?.venue_address || '',
    event_date: editEvent?.event_date || '',
    audience: editEvent?.audience || false,
    delegates: editEvent?.delegates || false,
    speaker: editEvent?.speaker || false,
    nri: editEvent?.nri || false
  });

  const handleChange = (e?: any) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = async (e?: any) => {
    e.preventDefault();
    try {
        const response = !editEventId ? await saveEvent(formData) : await updateEvent(editEventId,formData);
        if (response?.success) {
          showToast(response.message, 'success');
          navigate("/events");
        }
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  return (
    <div className="landing-container">
      <Sidebar />
      <div className="content-container">
        <div className="app_mainbody">
          <h2 className="page-title-heading">Overview</h2>
          <div className="form-section mt-3">
            <form className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Event Name</label>
                    <input type="text" name="event_name" value={formData.event_name}
                      onChange={handleChange} placeholder="Event Name" className='form-control' />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Event Venue Address</label>
                    <input type="text" name="venue_address" value={formData.venue_address} onChange={handleChange}
                      placeholder="Address" className='form-control' />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Event Date</label>
                    <div className="date-input">
                      <input type="date" name="event_date" value={formData.event_date} onChange={handleChange}
                        placeholder="Event Date" className='form-control' />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group attendee-types">
                    <label>Attendee Types</label>
                    <div className="checkbox-group mt-2">
                      <label>
                        <input type="checkbox" name="audience" checked={formData.audience} onChange={handleChange} />
                        Audience
                      </label>
                      <label>
                        <input type="checkbox" name="delegates" checked={formData.delegates} onChange={handleChange} />
                        Delegate
                      </label>
                      <label>
                        <input type="checkbox" name="speaker" checked={formData.speaker} onChange={handleChange} />
                        Speaker
                      </label>
                      <label>
                        <input type="checkbox" name="nri" checked={formData.nri} onChange={handleChange} />
                        NRI
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-end mt-4">
                  <button type="button" className="btn next-button" onClick={handleSave}>Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
