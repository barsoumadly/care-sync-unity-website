import { useState } from "react";
import { useAuth } from "../../../../../context/AuthContext";
import DynamicAnalysisInput from "./DynamicAnalysisInput";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function AnalysisPaper({
  setOpenCard,
  setIsAdding,
  clinicName,
  patientName,
  register,
  control,
  errors,
}) {
  const { user } = useAuth();
  const date = new Date().toLocaleDateString();

  function onSubmit() {
    setIsAdding("analysis");
    setOpenCard("");
    toast.success("Analysis registered successfully!");
  }

  function handleCancel() {
    setOpenCard("");
  }

  return (
    <>
      <div className="main-wrapper ">
        {/* Page Content */}
        <div className=" container-fluid " style={{ marginTop: "10%" }}>
          <div className="col-xl-12 ">
            <div className="card invoice-info-card">
              <div className="card-body">
                <div className="invoice-item invoice-item-one">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img
                          src="/public/images/logo/care-sync-unity-logo.png"
                          alt="logo"
                        />
                      </div>
                      <div className="invoice-head">
                        <h2>Prescription</h2>
                        <p>Patient Name: {patientName}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text-one">
                          Prescription From
                        </strong>
                        <h6 className="invoice-name">{clinicName}</h6>
                        <p>Date: {date} </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="invoice-item invoice-item-two">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text-one">
                          Written by Dr.{user.name}
                        </strong>
                        <h6 className="invoice-name"></h6>
                        <p className="invoice-details invoice-details-two">
                          Specialization:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <DynamicAnalysisInput
                  control={control}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="doctor-submit text-end">
          <button
            type="button"
            className="btn btn-primary submit-form me-2"
            onClick={onSubmit}
          >
            Save Prescription
          </button>
          <button
            type="button"
            className="btn btn-primary cancel-form"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AnalysisPaper;
