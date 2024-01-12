import React, { useState } from "react";
import * as S from "./style";
import Process2 from "../process2";
import Process3 from "../process3";
import Process4 from "../process4";

function Process() {
  const [step, setStep] = useState(0);
  const [info, setInfo] = useState({
    benefactorId: 0,
    title: "",
    subject: "",
    curriculum: "",
    publisher: "",
    writingToolList: [],
    writingDegree: "",
    preservationStatusList: [],
  });

  return (
    <S.ProcessContainer>
      {/* ---------- process 1 ---------- */}
      {step === 0 ? (
        <>
          <Process2 setStep={setStep} info={info} setInfo={setInfo} />
        </>
      ) : (
        <></>
      )}
      {/* ---------- process 2 ---------- */}
      {step === 1 ? (
        <>
          <Process3 setStep={setStep} info={info} setInfo={setInfo} />
        </>
      ) : (
        <></>
      )}
      {/* ---------- process 3 ---------- */}
      {step === 2 ? (
        <>
          <Process4 setStep={setStep} info={info} setInfo={setInfo} />
        </>
      ) : (
        <></>
      )}

      {/* ---------- process 4 ---------- */}

      {/* ---------- process 5 ---------- */}
    </S.ProcessContainer>
  );
}

export default Process;
