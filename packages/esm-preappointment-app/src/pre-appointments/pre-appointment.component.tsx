/* eslint-disable no-console */
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  DataTableSkeleton,
  Pagination,
} from '@carbon/react';
import React from 'react';
import { usePreAppointments } from './pre-appointment.resource';
import { useTranslation } from 'react-i18next';
import { ErrorState, usePagination } from '@openmrs/esm-framework';
import { usePaginationInfo } from '@openmrs/esm-patient-common-lib';
import styles from './pre-appointment.scss';
import { Row } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { Button } from '@carbon/react';
// Define the type of each row in the table
interface TableRow {
  id: any;
  ccc_number: string;
  person_name: string;
  ovcid_id: string;
  upi_number: string;
  program: string;
  predicted_risk: string;
  predicted_prob_disengage: string;
  prediction_generated_date: string;
  sms_delivery_status: string;
  rtc_date: string;
  follow_up_type: string;
  follow_up_reason: string;
  rescheduled_date: string;
  contact_reached: string;
  attempted_home_visit: string;
  reason_not_attempted_home_visit: string;
  was_client_found: string;
  comments: string;
  reason_client_not_found: string;
  was_follow_up_successful: boolean;
  number_of_failed_phone_attempts: string;
  gender: string;
  identifiers: string;
  phone_number: string;
  latest_rtc_date: string;
  latest_vl: number;
  vl_category: string;
  latest_vl_date: string;
  last_appointment: string;
  cur_meds: string;
  nearest_center: string;
  covid_19_vaccination_status: string;
  age: number;
  uuid: string;
}
type PreAppointmentProps = {};
const PAGE_SIZE = 10;
// Should be provided by report filter controls
const testProps = {
  locationUuid: '08feae7c-1352-11df-a1f1-0026b9348838',
  yearWeek: '2024-W07',
};
// const weeksInYearData = weeksInYear();

export const PreAppointment: React.FC<PreAppointmentProps> = () => {
  const { t } = useTranslation();
  const { preappointments, isLoading, error } = usePreAppointments(testProps.locationUuid, testProps.yearWeek);
  // TODO: Append the rest of table headers for the pre-appointments
  const headers = [
    { key: 'ccc_number', header: 'CCC Number' },
    { key: 'person_name', header: 'Person Name' },
    { key: 'upi_number', header: 'Nupi_number' },
    { key: 'gender', header: 'Gender' },
    { key: 'age', header: 'Age' },
    { key: 'identifiers', header: 'Identifiers' },
    { key: 'program', header: 'Program' },
    { key: 'phone_number', header: 'Phone Number' },
    { key: 'predicted_risk', header: 'Predicted Risk' },
    { key: 'predicted_prob_disengage', header: 'Predicted Score(%)' },
    { key: 'prediction_generated_date', header: 'Prediction Generated Date' },
    { key: 'last_appointment', header: 'latest Appointment' },
    { key: 'rtc_date', header: 'Rtc Date' },
    { key: 'latest_rtc_date', header: 'Latest Rtc Date' },
    { key: 'cur_meds', header: 'Current Regimen' },
    { key: 'latest_vl', header: 'Latest VL' },
    { key: 'latest_vl_date', header: 'Latest VL Date' },
    { key: 'vl_category', header: 'VL Category' },
    { key: 'follow_up_type', header: 'Follow-up Type' },
    { key: 'follow_up_reason', header: 'Follow-up Reason' },
    { key: 'was_follow_up_successful', header: 'Follow-up Success' },
    { key: 'rescheduled_date', header: 'Rescheduled Date' },
    { key: 'number_of_failed_phone_attempts', header: 'No. of Failed Phone Attempts' },
    { key: 'comments', header: 'comments' },
    { key: 'sms_delivery_status', header: 'SMS outcome' },
    { key: 'contact_reached', header: 'Contact Reached' },
    { key: 'attempted_home_visit', header: 'Attempted Home Visit' },
    { key: 'reason_not_attempted_home_visit', header: 'Reason Not Attempted Home Visit' },
    { key: 'was_client_found', header: 'Client Found' },
    { key: 'reason_client_not_found', header: 'Reason Client Not Found' },
    { key: 'nearest_center', header: 'Nearest Center' },
    { key: 'covid_19_vaccination_status', header: 'COVID-19 Vaccination Status' },
  ];
  const { results, goTo, currentPage } = usePagination(preappointments ?? [], PAGE_SIZE);
  const { pageSizes } = usePaginationInfo(PAGE_SIZE, preappointments.length, currentPage, results.length);

  // console.log(weeksInYear());

  const tableRows: TableRow[] = results.map((row: any) => ({
    id: `${row.person_id}`,
    ccc_number: row.ccc_number,
    person_name: row.person_name ?? '--',
    age: row.age,
    uuid: row.uuid,
    ovcid_id: row.ovcid_id,
    upi_number: row.upi_number,
    program: row.program,
    predicted_risk: row.predicted_risk,
    predicted_prob_disengage: row.predicted_prob_disengage,
    prediction_generated_date: row.prediction_generated_date,
    sms_delivery_status: row.sms_delivery_status,
    rtc_date: row.rtc_date,
    follow_up_type: row.follow_up_type,
    follow_up_reason: row.follow_up_reason,
    rescheduled_date: row.rescheduled_date,
    contact_reached: row.contact_reached,
    attempted_home_visit: row.attempted_home_visit,
    reason_not_attempted_home_visit: row.reason_not_attempted_home_visit,
    was_client_found: row.was_client_found,
    comments: row.comments,
    reason_client_not_found: row.reason_client_not_found,
    was_follow_up_successful: row.was_follow_up_successful,
    number_of_failed_phone_attempts: row.number_of_failed_phone_attempts,
    gender: row.gender,
    identifiers: row.identifiers,
    phone_number: row.phone_number,
    latest_rtc_date: row.latest_rtc_date,
    latest_vl: row.latest_vl,
    vl_category: row.vl_category,
    latest_vl_date: row.latest_vl_date,
    last_appointment: row.last_appointment,
    cur_meds: row.cur_meds,
    nearest_center: row.nearest_center,
    covid_19_vaccination_status: row.covid_19_vaccination_status,
  }));

  if (isLoading) {
    return <DataTableSkeleton headers={headers} aria-label={t('preAppointments', 'Pre appointments')} />;
  }
  if (error) {
    return <ErrorState error={error} headerTitle={t('preAppointments', 'Pre appointments')} />;
  }
  return (
    <div className={styles.preAppointment}>
      <Dropdown
        items={[
          { id: 'option-0', text: 'MTRH' },
          { id: 'option-1', text: 'Test Site ' },
          { id: 'option-2', text: 'Webuye' },
        ]}
        itemToElement={(item) => (item ? <span className="test">{item.text}</span> : '')}
        label="Select Location"
        titleText="Select Location"
      />
      <Dropdown
        items={[
          { id: '2024-W06', text: '2024 W06-From Mon Jan 29 2024 to Sun Feb 04 2024' },
          { id: '2024-W07', text: '2024 W07-From Mon Feb 05 2024 to Sun Feb 11 2024' },
          { id: '2024-W08', text: '2024 W08-From Mon Feb 12 2024 to Sun Feb 18 2024' },
          { id: '2024-W09', text: '2024 W09-From Mon Feb 19 2024 to Sun Feb 25 2024' },
          { id: '2024-W09', text: '2024 W09-From Mon Feb 26 2024 to Sun Mar 03 2024' },
        ]}
        itemToElement={(item) => (item ? <span className="test">{item.text}</span> : '')}
        label="Select Week"
        titleText="Year Week"
      />

      <Dropdown
        items={[
          { id: 'option-0', text: 'All' },
          { id: 'option-1', text: 'Appointment successful' },
          { id: 'option-2', text: 'Appointment Failed' },
        ]}
        itemToElement={(item) => (item ? <span className="test">{item.text}</span> : '')}
        label="Filter"
        titleText="Filter Type"
      />

      <Button>Generate Patient List</Button>

      <DataTable rows={tableRows} headers={headers} size="sm" useZebraStyles>
        {({ rows, headers, getHeaderProps, getRowProps, getTableProps, getTableContainerProps }) => (
          <TableContainer
            title={t('preAppointments', 'Pre-Appointments')}
            description={t('preAppointmentDescription', 'Pre-appointments for the selected week')}
            {...getTableContainerProps()}>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({
                        header,
                      })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  return (
                    <TableRow
                      key={row.id}
                      {...getRowProps({
                        row,
                      })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      <Pagination
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Items per page:"
        onChange={({ page }) => goTo(page)}
        page={currentPage}
        pageSize={PAGE_SIZE}
        pageSizes={pageSizes}
        size="md"
        totalItems={103}
      />
    </div>
  );
};
