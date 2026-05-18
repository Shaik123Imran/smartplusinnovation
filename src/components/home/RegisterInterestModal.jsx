import Modal from '../common/Modal'
import RegisterInterestForm from '../forms/RegisterInterestForm'

function RegisterInterestModal({ open, onClose }) {
  return (
    <Modal isOpen={open} onClose={onClose} title="Register Your Interest" size="lg">
      <p className="text-text/60 text-sm mb-6 -mt-2">
        Share your details and our team will contact you with batch dates, fees, and curriculum.
      </p>
      <RegisterInterestForm
        formId="register-interest-modal-form"
        onSuccess={() => {
          setTimeout(onClose, 2500)
        }}
      />
    </Modal>
  )
}

export default RegisterInterestModal
